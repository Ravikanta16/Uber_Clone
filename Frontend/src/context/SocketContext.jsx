import React, {useState,createContext, useEffect} from 'react'
import {io} from 'socket.io-client'

export const SocketIdContext=createContext();

const socket=io(`${import.meta.env.VITE_BASE_URL}`);

const SocketContext=({children})=>{

    useEffect(()=>{
        socket.on('connect',()=>{
            console.log('connected to server');
        })
        socket.on('disconnect',()=>{
            console.log('disconnected from server');
        })
    },[]);

    // const sendMessage=(eventName,message)=>{
    //     console.log(`sending message: ${message} to ${eventName}`);
    //     socket.emit(eventName,message)
    // }

    // const receiveMessage=(eventName,callback)=>{
    //     socket.on(eventName,callback);
    // }

    return(
        <SocketIdContext.Provider value={{socket}}>
        {children}
        </SocketIdContext.Provider>
    )  
}

export default SocketContext;
