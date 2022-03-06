const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Schema =>схема
const userSchema = new Schema({
    email:{
        type: String,
        // string =>нить
        required: true,
        // required =>требуется
        unique: true
        // unique =>уникальный
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema)