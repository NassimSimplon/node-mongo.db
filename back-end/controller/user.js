const userModel = require('../model/userModel.js')


module.exports = {
    getAll:function (req,res){
       userModel.find((err,users)=>{
           if(err){
               return res.status(500).json({
                   message : 'mayjich',
                   error: err 
               })           }
               return res.json(users)
       })
    }
}