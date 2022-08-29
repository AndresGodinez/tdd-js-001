const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const validationRouter = require('./routes/validation');
const kataRouter = require('./routes/kata');
const protectionRoutes = require('./routes/protection');

const csrf = require('csurf')
const bodyParser = require('body-parser')
const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(csrf({ cookie: true }))
app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/validation', validationRouter);
app.use('/kata', kataRouter);
app.use('/protection', protectionRoutes);

module.exports = app;