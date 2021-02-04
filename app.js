//then we create server with express
const express=require('express');
const { ppid } = require('process');
const app=express();


app.get('/',(req,res)=>{
    res.send('hey server from express');
})


app.listen(4000);