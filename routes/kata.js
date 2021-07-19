const express = require('express');
const router = express.Router();
const createError = require('http-errors');


router.get('/', function (req, res, next) {
    //TODO implement fizz buzz
    return res.status(200)
        .json(
            [
                {result: 'test'}
            ]);
});


module.exports = router;
