const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUser = new Schema({
    uid: String,
    name: String,
    email: String,
    password: String,
}, { timestamps: false });

module.exports = mongoose.model('User', newUser)
