const rideModel=require('../models/rideModel');
const mapService=require('../services/mapService');
const crypto = require('crypto');

async function getFare(pickup,destination){
    if(!pickup || !destination){
        throw new Error('Pickup and Destination are required');
    }

    const distanceTime=await mapService.getDistTime(pickup,destination);
    const fareRates = {
        auto: 8, // rate per km
        car: 12,  // rate per km
        bike: 5   // rate per km
    };

    const fare = {
        auto: (distanceTime.distance.value)/1000 * fareRates.auto,
        car: (distanceTime.distance.value)/1000 * fareRates.car,
        bike: (distanceTime.distance.value)/1000 * fareRates.bike
    };

    return fare;
}

function getOtp(num){
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}

module.exports.createRide=async({
    user,pickup,destination,vehicleType
})=>{
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All fields are required');
    }
    const fare=await getFare(pickup,destination);
    const ride=rideModel.create({
        user,
        pickup,
        destination,
        fare:fare[vehicleType],
        otp:getOtp(6)
    })
    return ride;
}

