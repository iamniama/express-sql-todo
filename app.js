// 1 - environment
require('dotenv').config();

// 2 - imports
const express = require('express');
//const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

// 3 - App set up
const app = express();
app.set('view engine', 'ejs');

// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public/'));
app.use(require('morgan')('dev'));
const db=require('./models')

// 5 - Routes (controllers)
app.get('/', (req, res) => {
    res.render('index') 
});

app.use('/tasks', require('./routes/task'))
app.use('/categories', require('./routes/category'))
app.use('/statuses', require('./routes/status'))
app.use('/contexts', require('./routes/context'))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});