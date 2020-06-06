const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const SessionSchema = new mongoose.Schema({
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
	refreshTokens: [{
        token: {
            type: String,
            required: true
        }
  }]
}, {
	timestamps: true,
	usePushEach: true
});

SessionSchema.methods.toJSON = function () {
    const session = this;
	const sessionObject = session.toObject();
	return _.pick(session, ['_id', 'refreshTokens']);
}

UserSchema.methods.generateRefreshToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();
  user.tokens.push({access, token});
  return user.save().then(() => {
    return token;
  });
};

//Method type differ by above instance method as in
//Model methods are called on Schema ..i.e UserCollection, while instance methods
//are called on an instance of Model..i.e one specified user we have info about
UserSchema.statics.findByToken = function (token) {
	var Session = this;
	var decoded;
	try {
		decoded = jwt.verify(token, process.env.JWT_SECRET);
	} catch (e) {
		return Promise.reject();
	}
	
	return Session.findOne({
		'tokens':{ $elemMatch: {'role' : 'auth', token}},
  },{access: 0, tokens:0, createdAt: 0, updatedAt: 0, password:0, __v: 0});
};

SessionSchema.pre('save', function (next) {
		const session = this;
		if(session.isModified('password')){
			bcrypt.genSalt(10, (err, salt) =>{
				bcrypt.hash(session.password, salt, (err, hash) => {
					session.password = hash;
					next();
				})
			})
		}else{
			next();
		}
})


const Session = mongoose.model('Session', SessionSchema);
module.exports = {Session};