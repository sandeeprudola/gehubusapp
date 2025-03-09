const mongoose=require('mongoose');



function connectodb(){
    mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:
        true, useUnifiedTopology: true},()=>{
        console.log('Connected to DB');
        }). catch(err = console. log (err));
}