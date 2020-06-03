const express = require('express');
const Code = require('../models/codes');
const router = express.Router();

router.get('/codes', (req, res) => {
    Code.find().then(codes => res.json(codes)).catch(err => {
        console.log(err)
        res.status(400).json(err);
    })
})

router.post('/get', (req, res) => {

    const newCode = new Code({
        status: false
    })

    newCode.save().then(code => res.json({success: true, code})).catch(err => {
        console.log(err)
        res.status(400).json(err);
    })
})


module.exports = router;

