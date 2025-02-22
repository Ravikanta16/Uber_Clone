import React from 'react';
import { useState } from 'react';
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import { useRef } from 'react';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRidePanel from '../components/ConfirmRidePanel';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';


const Home = () => {
    const [pickUp,setPickUp]=useState('')
    const [destination,setDestination]=useState('')
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

    const submitHandler=(e)=>{
        e.preventDefault();
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%'
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
                <div className='bg-white p-4 h-[30%]'>
                    <h3 ref={panelCloseRef} opacity-0 onClick={()=>{
                        setPanelOpen(false)
                    }}>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h3>
                    <h2 className='text-2xl font-bold text-black mt-1 mb-3'>Find a trip</h2>
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>                        
                        <input className='bg-slate-200 border rounded-lg w-full mb-3 px-2 py-2'
                            onClick={()=>setPanelOpen(true)}
                            value={pickUp}
                            onChange={(e)=>{
                                setPickUp(e.target.value)}
                            }
                            required type='text' 
                            placeholder='Add a pick-up location'
                        />
                        <input className='bg-slate-200 border rounded-lg w-full mb-3 px-2 py-2'
                            onClick={()=>setPanelOpen(true)}
                            value={destination}
                            onChange={(e)=>{
                                setDestination(e.target.value)}
                            }
                            required type='text'
                            placeholder='Enter your destination'
                        />
                    </form>
                </div>  
                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanelOpen={setVehiclePanelOpen}/>
            </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <ConfirmRidePanel setConfirmRide={setConfirmRide} setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={vehicleFoundPanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <LookingForDriver setVehicleFound={setVehicleFound} setWaitingDriver={setWaitingDriver}/>
            </div>
            <div ref={waitingDriverPanelRef} className='fixed w-full z-10 bottom-0 bg-white p-6'>
                <WaitForDriver setWaitingDriver={setWaitingDriver}/>
            </div>
        </div>
    );
};

export default Home;