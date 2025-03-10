const dotenv=require('dotenv');
const express=require('express');
const cors=require('cors');
const connectodb=require('./db/db');


dotenv.config();
const app=express();


connectodb();


app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello');
})

module.exports=app;