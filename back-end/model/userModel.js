const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
nom :{
    type:String,
    
},
email :{
    type:String,
    
}

})

module.exports = mongoose.model('user',userSchema)