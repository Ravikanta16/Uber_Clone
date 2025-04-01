import React, { useContext, useEffect } from 'react';
import { useState} from 'react';
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import { useRef } from 'react';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRidePanel from '../components/ConfirmRidePanel';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';
import axios from 'axios';
import _ from 'lodash';
import { SocketIdContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';

const Home = () => {
    const [pickUp,setPickUp]=useState('')
    const [destination,setDestination]=useState('')
    const [pickUpSuggestions,setPickUpSuggestions]=useState('')
    const [destinationSuggestions,setDestinationSuggestions]=useState('')
    const [activeField,setActiveField]=useState('')
    const [fare,setFare]=useState({})
    const [vehicleType,setVehicleType]=useState('')

    const panelRef=useRef(null);
    const panelCloseRef=useRef(null);
    const vehiclePanelRef=useRef(null);
    const confirmRidePanelRef=useRef(null);
    const vehicleFoundPanelRef=useRef(null);
    const waitingDriverPanelRef=useRef(null);
    const [panelOpen,setPanelOpen]=useState(false);
    const [vehiclePanelOpen,setVehiclePanelOpen]=useState(false);
    const [confirmRide,setConfirmRide]=useState(false);
    const [vehicleFound,setVehicleFound]=useState(false);
    const [waitingDriver,setWaitingDriver]=useState(false);

    const {socket}=useContext(SocketIdContext);
    const {userData}=useContext(UserDataContext);

    useEffect(()=>{
        socket.emit('join',{userId: userData._id,userType:'user'})
    },[userData])

    const submitHandler=(e)=>{
        e.preventDefault();
    }

    const findTrip=()=>{
        setVehiclePanelOpen(true);
        setPanelOpen(false);
        {myfare}
    }
    
    const myfare=async ()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-fare`,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
                params:{ 
                    origin:pickUp,
                    destination:destination
                }
            });
            // console.log(response.data)
            setFare(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    }

    const pickupHandler=async (e)=>{
        setPickUp(e.target.value);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
                params:{ input:e.target.value }
            });
            // console.log(response.data)
            setPickUpSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const destinationHandler=async (e)=>{
        setDestination(e.target.value);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
                params:{ input:e.target.value }
            });
            // console.log(response.data)
            setDestinationSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    }

    
    // const fetchSuggestions=async (input)=>{
    //     try{
    //         const token = localStorage.getItem('token');
    //         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
    //             headers:{
    //                 Authorization: `Bearer ${token}`
    //             },
    //             params:  
    //                 {input:input}
    //         });
    //         console.log(response.data)
    //         if(activeField==='pickup'){
    //             setPickUpSuggestions(response.data);
    //         }else{
    //             setDestinationSuggestions(response.data);
    //         }
    //         // setSuggestions(response.data);
    //     } catch (error) {
    //         console.error('Error fetching suggestions:', error);
    //     }
    // }


    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'65%'
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%'
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanelOpen){
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanelOpen])

    useGSAP(function(){
        if(confirmRide){
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRide])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundPanelRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(vehicleFoundPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehicleFound])

    useGSAP(function(){
        if(waitingDriver){
            gsap.to(waitingDriverPanelRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(waitingDriverPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[waitingDriver])

    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-14 ml-3 absolute' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"></img>
            <div className='h-screen w-screen'>
                <img className='h-full w-full' src='https://t3.ftcdn.net/jpg/07/28/30/26/240_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg'></img>
            </div>
            <div className='flex flex-col justify-end h-screen w-full absolute top-0'> 
                <div className='bg-white px-4 py-2 h-[35%]'>
                    <h3 ref={panelCloseRef} onClick={()=>{
                        setPanelOpen(false)
                    }}>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h3>
                    <h2 className='text-2xl font-bold text-black mt-1 mb-2'>Find a trip</h2>
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>                        
                        <input className='bg-slate-200 border rounded-lg w-full mb-2 px-2 py-2'
                            onClick={()=>{
                                setActiveField('pickup')
                                setPanelOpen(true)
                            }}
                            value={pickUp}
                            onChange={(e)=>{
                                pickupHandler(e)
                            }}
                            required type='text' 
                            placeholder='Add a pick-up location'
                        />
                        <input className='bg-slate-200 border rounded-lg w-full mb-2 px-2 py-2'
                            onClick={()=>{
                                setActiveField('destination')
                                setPanelOpen(true)
                            }}
                            value={destination}
                            onChange={(e)=>{
                                destinationHandler(e)
                            }}
                            required type='text'
                            placeholder='Enter your destination'
                        />
                    </form>
                    <button
                        onClick={findTrip}
                        className='w-full rounded bg-black text-white font-bold px-1 py-2'>
                        Find Trip
                    </button>
                </div>  
                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel 
                        // setPanelOpen={setPanelOpen} 
                        // setVehiclePanelOpen={setVehiclePanelOpen} 
                        suggestions={activeField==='pickup' ? pickUpSuggestions : destinationSuggestions}
                        setPickUp={setPickUp} 
                        setDestination={setDestination} 
                        activeField={activeField}/>
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanelOpen={setVehiclePanelOpen} fare={fare} setVehicleType={setVehicleType}/>
            </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <ConfirmRidePanel setConfirmRide={setConfirmRide} setVehicleFound={setVehicleFound} fare={fare} pickUp={pickUp} destination={destination} vehicleType={vehicleType}/>
            </div>
            <div ref={vehicleFoundPanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <LookingForDriver setVehicleFound={setVehicleFound} setWaitingDriver={setWaitingDriver} fare={fare} pickUp={pickUp} destination={destination} vehicleType={vehicleType}/>
            </div>
            <div ref={waitingDriverPanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <WaitForDriver setWaitingDriver={setWaitingDriver} pickUp={pickUp}/>
            </div>
        </div>
    );
};

export default Home;