const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        default: 'anassdev@gmail.com'
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;