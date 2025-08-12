require('dotenv').config({path: './config.env'});
const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
    console.log('SERVER RUN AT : ' + PORT);
});
