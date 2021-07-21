const mongoose = require('mongoose')
const Schema = mongoose.Schema
const fabriqueSchema = new Schema({
nom :{
    type:String,
    required: true
},
formateur :{
    type:String,
    required: true
},
apprenants :{
    type:String,
    required: true
},
description :{
    type:String,
    required: true
}

})

module.exports = fabrique = mongoose.model('fabrique',fabriqueSchema)