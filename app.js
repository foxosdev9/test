const ex = require('express');
const app = ex();
const path = require('path')

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// app.use(ex.static('public'));



app.get('/', (req, res) => {
    res.status(200).render('home');
})



module.exports = app;