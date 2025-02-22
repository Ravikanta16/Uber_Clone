const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const captainController = require('../controllers/captainController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be Atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be Atleast 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be Atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate number must be Atleast 3 characters'),  
    body('vehicle.capacity').isInt().withMessage('capacity must be atleast 1'),  
    body('vehicle.vehicleType').isIn('car','bike','auto').withMessage('vehicle type must be car, bike or auto'),
],
captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be Atleast 6 chareacters')
],
captainController.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)

module.exports = router;