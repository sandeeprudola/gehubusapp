const userModels = require('../models/user.models');
const userservice = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req,res,next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {firstName,lastName,email,password}=req.body;
    const hashPassword=await userModels.hashPassword(password);

    const user=await userservice.createUser({
        firstName,
        lastName,
        email,
        password:hashPassword
    })
}