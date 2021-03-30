const express = require('express');
const router = express.Router();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const MongoStore = require("connect-mongo")(session)
const mongoose = require("mongoose")

// Initializations
const app = express();
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('trust proxy', 1);

// Midlewares
app.use(morgan('dev'))
app.use(cors({
    origin: "https://my-mern-application.herokuapp.com" ,
    credentials: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.enable("trust proxy");
app.use(session({
    secret: process.env.SESSION_SECRET || "my-secret",
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: true
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 7 * 24 * 60 * 60 * 1000
    })
}))
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use(express.static('frontend/build'))

app.use(require('./routes/news.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/higlights.routes'));
app.use(require('./routes/Article.routes'));
app.use(require('./routes/Comments.routes'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function(err) {
        if(err){
            res.status(500).send(err)
        }
    })
})

module.exports = app;