const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { fullname, email, password, vehicle } = req.body;
    console.log(req.body);

    const captainExists = await captainModel.findOne({email});
    if (captainExists) {
        return res.status(400).json({ error: 'Captain already exists' });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        colour: vehicle.colour,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token=captain.generateAuthToken();

    res.status(201).json({token,captain});
}

module.exports.loginCaptain = async (req, res,nect) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(400).json({ error: 'Captain does not exist' });
    }

    const passwordMatch = await captain.comparePassword(password);
    if (!passwordMatch) {
        return res.status(400).json({ error: 'Invalid password' });
    }

    const token=captain.generateAuthToken();
    res.cookie('token',token);

    res.status(200).json({token,captain});
}