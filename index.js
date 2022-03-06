// const { request, response } = require('express')
// const express = require('express')
// require => требовать

// const app = express()
// app.get('/', (req, res)=> {
//     res.status(200).json({
//         message: 'Working'
//     })
// })
                
// ^^^это роут^^^
// находить все что отпрвляет клиент к серверу =>
    // request запрос
// этот парамер отвечает клиенту    
    // response отклик

const nodemon = require('nodemon')
const app = require('./app')
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server has been started on ${port}`))
// console => консоль
// log => бревно


// npm run start
// node index.js
// npm i nodemon --save-dev
// npm run server

//npm i mongoose // фреймворк или же пакет

// npm install cors morgan
// cors и morgan ldf два разных пакета 
// npm install body-parser установка паосинга