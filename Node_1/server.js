const express = require('express')
const app = express()
const db = require('./db')


app.post('/user',(req,res)=>{
    console.log('Data is saved');
    res.send("Data is saved");
})

app.listen(3000,()=>{
    console.log('Server is runnign on port 3000');
    
})