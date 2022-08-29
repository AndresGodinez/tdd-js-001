const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const Validator = require('validatorjs')

router.post('/form',  function (req, res) {
    // pass the csrfToken to the view
    try{
        console.log({csrfToken: req.csrfToken()});
    }catch (e){

    }


    res.status(200).json({ csrfToken: req.csrfToken() });
})

router.post('/process', function (req, res) {
    res.send('data is being processed')
})


module.exports = router;