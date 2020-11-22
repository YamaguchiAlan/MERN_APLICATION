const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// Initializations
const app = express();
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 4000);

// Midlewares
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000' ,
    credentials: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'my-secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use(require('./routes/news.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/featured.routes'));
app.use(require('./routes/Article.routes'));

module.exports = app;