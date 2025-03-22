const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:[3,'Name should be atleast 3 characters']
    },
    lastname:{
        type:String,
        required:false,
        minlength:[3,'Name should be atleast 3 characters']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:[5,'Email should be atleast 5 characters'],
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Invalid Email']
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketID:{
        type:String
    },

    status:{
        type:String,
        enum:['online','offline'],
        default:'offline'
    },

    vehicle:{
        colour:{
            type:String,
            required:true,
            minlength:[3,'Colour should be atleast 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate should be atleast 3 characters']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity should be atleast 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['bus']
        }
    },

    location:{
        lat:{
            type:Number,
        },
        long:{
            type:Number,
        }
    }


})

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
} 

captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,12);
}

const captainModel = mongoose.model('captain',captainSchema);

module.exports=captainModel;