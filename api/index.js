const ex = require('express');
const port = 8080;
const app = ex();

app.use(ex.static('public'));

app.get('/', (req, res) => {
    res.json({name: 'ANASS DEVELOPER'});
})

app.listen(port, (req, res) => {
    console.log('SERVER RUN AT : 8080')
});