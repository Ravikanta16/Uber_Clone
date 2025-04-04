const captainModel = require('../models/captainModel')
const captainService = require('../services/captainService')
const {validationResult} = require('express-validator')
const BlacklistToken = require('../models/blacklistToken')
const authMiddleware = require('../middlewares/authMiddleware')

module.exports.registerCaptain = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,email,password,vehicle}=req.body;

    const isCaptainExist = await captainModel.findOne({email});
    if(isCaptainExist){
        return res.status(400).json({message:'Captain already exist'})
    }

    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,   
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });

    const token = await captain.generateAuthToken();

    return res.status(201).json({token,captain});
},

module.exports.loginCaptain = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email,password}=req.body;
    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(400).json({message:'Invalid email or password'})
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token = await captain.generateAuthToken();
    res.cookie('token',token);
    return res.status(201).json({token,captain});
}

module.exports.getCaptainProfile = async(req,res,next) => {
    return res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async(req,res,next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistToken.create({token})
    res.status(200).json({message:'Logged out successfully'});
}


