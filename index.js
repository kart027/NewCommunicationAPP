const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
app.use(express.json())



app.get("/ok",(req,res)=>{
    res.send("ok working")
})

mongoose.connect(process.env.MONGO_url).then(()=>{
    console.log("sucessfully connected")
}).catch((error)=>{
    console.log(error)
})


app.listen(process.env.PORT,()=>{
    console.log("hi")
})