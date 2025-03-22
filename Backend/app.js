const dotenv=require('dotenv');
const express=require('express');
const cors=require('cors');
const connectodb=require('./db/db');
const userroutes=require('./routes/user.routes');
const captainroutes=require('./routes/captain.routes');

dotenv.config();
const app=express();
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


connectodb();


app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello');
})
app.use('/users',userroutes);
app.use('/captains',captainroutes);

module.exports=app;