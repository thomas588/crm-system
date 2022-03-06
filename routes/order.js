const express = require('express')
const controller = require('../controllers/order')
const router = express.Router()

router.post('/login', controller.getAll)
router.post('/register', controller.create)

module.exports = router

// npm run start
// node index.js
// npm i nodemon --save-dev
// npm run server