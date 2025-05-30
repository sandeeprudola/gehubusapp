const userModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListtoken.model');
const captainModel = require('../models/captain.model');


module.exports.AuthUser = async (req, res, next) => {

    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    const isblackListed=await blackListTokenModel.findOne({token:token});
    if(isblackListed){
        return res.status(401).json({message:'Unauthorized'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();
}
catch(err){
    return res.status(401).json({message:'Unauthorized'});
}
}

module.exports.AuthCaptain = async (req, res, next) => {
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    const isblackListed=await blackListTokenModel.findOne({token:token});
    if(isblackListed){
        return res.status(401).json({message:'Unauthorized'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
}   catch(err){
    return res.status(401).json({message:'Unauthorized'});
}
}