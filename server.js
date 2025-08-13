require('dotenv').config({path: './config.env'});
const app = require('./app');
const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGOEB_ATLAS)
.then(() => console.log('DATABASE CONNECTED '))
.catch(err => console.log('ERROR : ' + err));

const PORT = process.env.PORT || 8080;



app.listen(PORT, (req, res) => {
    console.log('SERVER RUN AT : ' + PORT);
});

