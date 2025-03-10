const express=require('express');
const router=express.Router();
const {body}=require('express-validator')
const userControllers=require('../controllers/user.controllers')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstName').isLength({min:3}).withMessage('FirstName should be atleast 3 characters'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 characters')
],
userControllers.registerUser
)


modules.exports=router;