const express = require('express')
const controller = require('../controllers/analytics')
const router = express.Router()

router.get('/overview', controller.overview)
router.get('/analytics', controller.analytics)

module.exports = router

// npm run start
// node index.js
// npm i nodemon --save-dev
// npm run server