const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const validationRouter = require('./routes/validation');
const kataRouter = require('./routes/kata');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/validation', validationRouter);
app.use('/kata', kataRouter);

module.exports = app;