const captainControllers=require('../controllers/captain.controllers');
 const express=require('express');
 const router=express.Router();
 const {body}=require('express-validator') 


 router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('Name should be atleast 3 characters'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 characters'),
    body('vehicle.colour').isLength({min:3}).withMessage('Colour should be atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate should be atleast 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity should be atleast 1'),
    body('vehicle.vehicleType').isIn(['bus']).withMessage('Invalid vehicle type')
],
    captainControllers.registerCaptain

);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 characters')
],
    captainControllers.loginCaptain
);

// New route for updating location
router.post('/update-location', [
    body('lat').isNumeric().withMessage('Latitude must be a number'),
    body('long').isNumeric().withMessage('Longitude must be a number')
],
    captainControllers.updateLocation
);


 module.exports=router;