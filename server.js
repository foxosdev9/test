require('dotenv').config({path: './config.env'});
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

mongoose
.connect(process.env.MONGOEB_ATLAS)
.then(() => console.log('DATABASE CONNECTED '))
.catch(err => console.log('ERROR : ' + err));





app.listen(PORT, (req, res) => {
    console.log('SERVER RUN AT : ' + PORT);
});

