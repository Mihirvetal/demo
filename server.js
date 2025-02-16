const express = require('express')
const app = express()

app.use(express())


app.get('/hi',(req,res)=>{
    res.send("Hiii!")
})

app.listen(5000,()=>{
    console.log("Server started");
})