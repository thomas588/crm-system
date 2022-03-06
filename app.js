const express = require('express')
// require => требовать
const authRoutes = require('./routes/auth')
// подключаем парсер
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const { use } = require('./routes/auth')
const keys = require('./config/keys')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/fullstack')
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))
//connect =>соединять

app.use(passport.initialize())
require('./middleware/passport')(passport)

// dev => режим разработчика
app.use(require('morgan')('dev'))
// use =>использовать
// bodyParser это пакет
// urlencoded =>url encoded => URL закодирован
// extended =>расширенный
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// подключаем плагины^^
// подключаем пакет cors
// cors нужен чтобы обрабатовать cors запросы
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


// экспортируем наружу
module.exports = app