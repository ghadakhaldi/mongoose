
const express = require("express")
const app=express()
const connectDb=require ("./config/connectdb.js")


connectDb()
app.use(express.json())
app.use("/home",require("./routes/personroutes"))




const port=5001
app.listen(port,(err)=>{err?console.log(err):console.log(`serveur is runing at ${port}`)})
