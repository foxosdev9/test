const ex = require('express');
const app = ex();
const path = require('path');
const Email = require('./projects/models/EmailModel');
const viewRouter = require('./projects/routes/viewRouter');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req, res) => {
    res.status(200).render('home');
});

app.use(ex.static('public'));
app.use(ex.json());

// __________ ROUTES _____________

app.use('/page', viewRouter);










// Zi3z4waJn!y4Ank
module.exports = app;