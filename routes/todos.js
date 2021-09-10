const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const todos = [{
    id: 1,
    name: 'do something',
    completed: false
},
    {
        id: 2,
        name: 'do anything',
        completed: true
    }
];

router.get('/', function (req, res, next) {
    res.json(todos);

});


router.get('/:id', function (req, res, next) {
    const foundTodo = todos.find(todo => todo.id === Number(req.params.id));
    if (!foundTodo) {
        return next(createError(404, 'Not Found'))
    }
    return res.json(foundTodo);
});


router.post('/', function (req, res, next) {
    const {body} = req;
    if (typeof body.name !== 'string') {
        return next(createError(422, 'the name must be string'));
    }
    const nTodo = {
        id: todos.length + 1,
        name: body.name,
        completed: false
    };

    todos.push(nTodo);

    return res.status(201).json(nTodo);
});

module.exports = router;