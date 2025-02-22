const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be Atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be Atleast 6 chareacters')
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be Atleast 6 chareacters')
],
userController.loginUser
)

router.get('/profile',authMiddleware.authUser,userController.getUserprofile)

router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports = router;