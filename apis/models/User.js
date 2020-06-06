const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		lowercase: true,
		unique: true,
		required: true,
		trim: true,
		validate: {
			isAsync: false,
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	},
	password: {
		type: String,
		required: true
	},
	profile: {
		name: {
			type: String,
      		trim: true
		}
	},
	access:{
		type: String,
		required: true,
		default: 'AUTHORISED'
	},
	roles: [
		{
			type: String,
			required: true,
			default: 'USER'
		}
	]
}, {
	timestamps: true,
	usePushEach: true
});

UserSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();
	return _.pick(userObject, ['email', 'profile', 'access', 'roles']);
}

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({email: user.email, profile: user.profile, access: user.access, roles: user.roles}, process.env.JWT_SECRET).toString();
  console.log(token);

  //create a refresh token aswell and save it in Refresh db
  
  return token;
};


UserSchema.statics.findByCredentials = async function (email, password) {
	try {
		const User = this;
		const user = await User.findOne({email});
		const match = await bcrypt.compare(password, user.password);
		if (match){
			return Promise.resolve(user);
		}else{
			Promise.reject(401);
		}
	} catch (e) {
		return Promise.reject(404)
	}

};

UserSchema.pre('save', async function (next) {
	const user = this;
	if(user.isModified('password')){
		const hash = await bcrypt.hash(user.password, 10);
		user.password = hash;
		next();
	}else{
		next();
	}
})



const User = mongoose.model('User', UserSchema);
module.exports = {User};