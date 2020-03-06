const router = require('express').Router();
const allRoutes = require('./all.routes');

router.use('/all', allRoutes);


module.exports = router;