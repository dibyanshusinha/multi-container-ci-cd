const router = require('express').Router();

router.route('/register').post(async (req, res) => {
    res.status(200).send({message: "It works"});
})

router.route('/login').post(async (req, res) => {
    res.status(200).send({message: "It works"});
})

router.route('/forgot-password').post(async (req, res) => {
    res.status(200).send({message: "It works"});
})

module.exports = router;