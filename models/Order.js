const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Schema =>схема
const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    // order =>порядок
    order: {
        type: Number,
        required: true
    },
    list: [
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            // quantity =>quantity
            cost: {
                type: Number
            }
            // cost =>Стоимость
        }
    ],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('orders', orderSchema)