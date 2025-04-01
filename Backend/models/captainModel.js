const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const express = require('express');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            min:[3,'first name must be atleast 3 characters']
        },
        lastname:{
            type: String,
            min:[3,'last name must be atleast 3 characters']
        },
    },
    email: {
        type: String,
        required: true,
        min:[5,'email must be atleast 5 characters']
    },
    password: {
        type: String,
        required: true,
        select:false,
    },
    SocketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            min:[3,'color must be atleast 3 characters']
        },
        plate:{
            type:String,
            required:true,
            min:[3,'plate must be atleast 3 characters']    
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity must be atleast 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','bike','auto'],
            min:[3,'vehicle type must be atleast 3 characters'],
        },
    },
    location:{
        lat:{
            type:Number,
        },
        lon:{
            type:Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword =async function(password){
    return await bcrypt.hash(password,10);
}
  
const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;