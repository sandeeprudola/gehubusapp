const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:[3,'FirstName should be atleast 3 characters']
    },
    lastname:{
        type:String,
        required:true,
        minlength:[3,'LastName should be atleast 3 characters']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email should be atleast 5 characters']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketID:{
        type:String
    }

})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'1h'});
    return token;
}

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,12);
}
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;