const express = require('express');
const app = express();
const path = require('path');
const Email = require('./projects/models/EmailModel');
const viewRouter = require('./projects/routes/viewRouter');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).render('home');
});



// __________ ROUTES _____________

app.use('/page', viewRouter);










// Zi3z4waJn!y4Ank
module.exports = app;