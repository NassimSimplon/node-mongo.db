const express = require('express')
const router = express.Router()
 const user = require('../controller/user.js');

 router.get('/allUsers',user.getAll)

 module.exports = router