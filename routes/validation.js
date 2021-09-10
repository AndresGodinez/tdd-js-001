const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.post('/', function (req, res, next) {
    let {warranty} = req.body;


    if (String(warranty) === '0') {
        return res.status(200).json({value: String(151)})
    }

    if (String(warranty) === '1') {
        return res.status(200).json({value: String(101)})
    }

    if (String(warranty) === '2') {
        return res.status(200).json({value: String(111)})
    }

    if (String(warranty) === '3') {
        return res.status(200).json({value: String(111)})
    }


});

module.exports = router;