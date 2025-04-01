import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import 'remixicon/fonts/remixicon.css'

const CompleteRide = () => {
    const [completeRidePanel,setCompleteRidePanel]=useState("")
    const completeRidePanelRef=useRef(null)

    useGSAP(function(){
            if(completeRidePanel){
                gsap.to(completeRidePanelRef.current,{
                    transform:'translateY(0%)'
                })
            }else{
                gsap.to(completeRidePanelRef.current,{
                    transform:'translateY(100%)'
                })
            }
    },[completeRidePanel])

    return (
        <div ref={completeRidePanelRef}>
            <h5 className='w-full text-center' onClick={()=>{
                setCompleteRidePanel(false)
            }}><i className="text-lg text-gray-300 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4 p-2'>Finish this Ride</h3>
            <div className='p-4 w-full flex justify-between bg-yellow-400 rounded-lg mb-4'>
                <div className='flex items-center justify-between gap-3'>
                    <img className='border rounded-full h-16 w-16' src="https://imgs.search.brave.com/1_el-TyGEJ-GI_DOL2wxNO8XiurgdE4Wh6ll7GM8YVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNlc2hvd2Jpei5j/b20vaW1hZ2VzL3Bo/b3RvL3Bhc3Nlbmdl/ci5qcGc" alt=""/>
                    <h4 className='text-lg font-semibold'>Harshit</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='text-lg font-semibold'>₹290</h4>
                </div>
            </div>
            <div className='flex w-full gap-3 active:border-black bg-gray-50 rounded-md p-1 border-b-2 mb-4'>
                <h4><i className="items-center border bg-gray-200 rounded-lg p-1 ri-map-pin-user-fill"></i></h4>
                <div>
                    <p className='text-gray-500 text-sm'>Pick-Up</p>
                    <h5 className='text-lg font-medium'>511/11 A</h5>
                    <p className='text-base'>Gali no.2 TriNagar, New Delhi</p>
                </div>
            </div>
            <div className='flex w-full gap-3 active:border-black bg-gray-50 rounded-md p-1 border-b-2 mb-4'>
                <h4><i className="border bg-gray-200 rounded-lg p-1 ri-map-pin-fill"></i></h4>
                <div>
                    <p className='text-gray-500 text-sm'>Drop-off</p>
                    <h5 className='text-lg font-medium'>612/11-B</h5>
                    <p className=' tex-base'>Gali no.8 Pitampura, New Delhi</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center p-4'>
                <Link to = '/captain/home'
                className='flex items-center justify-center bg-green-500 text-white w-full rounded-md p-2 m-1'>Finish Ride</Link>
                <p className='text-red-500 text-sm'>Click on Finish Ride button if you get the Payment </p>
            </div>
        </div>
    );
};

export default CompleteRide;