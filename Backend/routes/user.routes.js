const express=require('express');
const router=express.Router();
const {body}=require('express-validator')
const userControllers=require('../controllers/user.controllers')
const authMiddleware=require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 characters')
],
userControllers.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 characters')
],
userControllers.loginUser
)

router.get('/profile',authMiddleware.AuthUser,userControllers.getUserProfile) 
router.get('/logout',authMiddleware.AuthUser,userControllers.logoutUser)

module.exports=router;