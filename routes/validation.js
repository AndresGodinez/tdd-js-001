const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const Validator = require('validatorjs')

router.post('/', function (req, res, next) {
    let {warranty} = req.body;
    let value;

    let rules = {
        warranty: 'required|numeric|max:4',
    };

    let validation = new Validator({warranty}, rules)
    
    if (validation.fails()){
        res.json(validation.errors);
    }

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