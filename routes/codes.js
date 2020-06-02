const express = require('express');
const Code = require('../models/codes');
const router = express.Router();

router.get('/codes', (req, res) => {



    try {
        // const codes = Code.find({});

        // return res.json({
        //     codes
        // });

        return Codes.find().then(codes => {
            res.json({codes})
        })


    } catch (error) {
        return res.status(400).json(error);
    }
})




module.exports = router;