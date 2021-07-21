const express = require('express')
const router = express.Router()
 const fabrique = require('../controller/fabriqueContoller');

 router.post('/add',fabrique.addFabrique)
 router.get('/get',fabrique.getFabrique)
 router.delete('/:id',fabrique.deleteFabrique)
 router.put('/:id',fabrique.updateFabrique)


 module.exports = router