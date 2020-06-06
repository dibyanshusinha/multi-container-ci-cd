const router = require('express').Router();

router.route('/').get(async (req, res) => {
    res.status(200).send({message: "Public routes Accessible !!"});
})

module.exports = router;