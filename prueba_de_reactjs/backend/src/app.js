const express = require('express');
const app = express();
const cors = require('cors');

// Settings
app.set('port', process.env.PORT || 4000);

// Midlewares
app.use(cors());
app.use(express.json())

// Routes
app.use(require('./routes/news.routes'));

module.exports = app;