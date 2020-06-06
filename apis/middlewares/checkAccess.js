const { User } = require('../models/User');

const access = async(req, res, next) => {
  const token = req.header('x-auth');
  try {
        jwtUser = jwt.verify(token, process.env.JWT_SECRET);
        req.jwtUser = jwtUser;
        next();
    } catch (e) {
        res.status(401).send({message: 'UNAUTH'});
    }
};


module.exports = {authenticate};