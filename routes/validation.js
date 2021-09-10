const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.post('/', function (req, res, next) {
    let {warranty} = req.body;
    let value;
    switch (String(warranty)) {
        case '0':
            value=151;
            break;
        case '2':
            value = 111;
            break;
        default:
            value =101
    }

        return res.status(200).json({value: String(value)})

});

module.exports = router;