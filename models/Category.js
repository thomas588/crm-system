const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Schema =>схема
const categorySchema = new Schema({
    name:{
        type: String,
        // string =>строка
        required: true
        // required =>требуется
    },
    imageSrc:{
        type: String,
        default:''
        // default =>дефолт
    },
    user:{
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('categories', categorySchema)