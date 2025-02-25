const mapService=require('../services/mapService');
const {validationResult}=require('express-validator');

module.exports.getCoordinates = async (req,res,next) =>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {address}=req.query;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch(error){
        res.status(404).json({message:'Coordinates not found'});
    }
}

module.exports.getDistanceTime = async(req,res,next) =>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {origin, destination}=req.query;

        const distanceTime=await mapService.getDistTime(origin,destination);
        res.status(200).json(distanceTime)

    } catch(error){
        res.status(500).json({message:'Internal server error'});
    }
}

module.exports.getAutoSuggestions = async(req,res,next) =>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {input}=req.query;

        const suggestions=await mapService.getSuggestions(input);
        res.status(200).json(suggestions)

    } catch(error){
        res.status(500).json({message:'Internal server error'});
    }
}