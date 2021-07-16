const express = require('express')
const app = express()
const cors = require('cors')
const body = require('body-parser')
const db = require('./config/db.js')
db();
const userRoute = require('./routes/userRoute')
app.use(cors())
app.use('/app/user',userRoute)

// config server 

const PORT = process.env.PORT || '4000'

app.listen(PORT,()=>{
    console.log(`server yekhdem ${PORT}`)
})