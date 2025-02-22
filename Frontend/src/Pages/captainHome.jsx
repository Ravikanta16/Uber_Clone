import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom';
import RidePopUp from '../components/RidePopUp';
import CaptainDetail from '../components/CaptainDetail';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import FinalRiding from '../components/FinalRiding';
import CompleteRide from '../components/CompleteRide';

const CaptainHome = () => {
    const [ridePopUpPanel,setRidePopUpPanel]=useState(false);
    const [confirmRidePopUpPanel,setConfirmRidePopUpPanel]=useState(false);
    const [finalRidePanel,setFinalRidePanel]=useState("")
    const ridePopUpPanelRef=useRef(null);
    const confirmRidePopUpPanelRef=useRef(null);
    const finalRidePanelRef=useRef(null)

    useGSAP(function(){
        if(ridePopUpPanel){
            gsap.to(ridePopUpPanelRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(ridePopUpPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[ridePopUpPanel])

    useGSAP(function(){
        if(confirmRidePopUpPanel){
            gsap.to(confirmRidePopUpPanelRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(confirmRidePopUpPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePopUpPanel])

    useGSAP(function(){
        if(finalRidePanel){
            gsap.to(finalRidePanelRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(finalRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[finalRidePanel])

    return (
        <div className='h-screen'>
            <div className='h-3/5'>
                <div className='fixed'>
                    <img className='p-4 w-16 mb-8'src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=2400"/>
                    <Link to ='/home' className='fixed border rounded-full bg-gray-100 flex items-center h-10 w-10 justify-center right-4 top-4'>
                        <h4 className='text-lg font-medium'><i className="ri-logout-box-r-line"></i></h4>
                    </Link>
                </div>
                <img className='h-full w-full' src='https://t3.ftcdn.net/jpg/07/28/30/26/240_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg'></img>
            </div>
            <div className='h-2/5'>
                <CaptainDetail setRidePopUpPanel={setRidePopUpPanel}/>
            </div>
            <div ref={ridePopUpPanelRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white'>
                <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
            </div>
            <div ref={confirmRidePopUpPanelRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white p-4'>
                <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setFinalRidePanel={setFinalRidePanel}/>
            </div>
            <div ref={finalRidePanelRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white'>
                <FinalRiding setFinalRidePanel={setFinalRidePanel}/>
            </div>
            {/* <div ref={completeRidePanelRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white'>
                <CompleteRide setCompleteRidePanel={setCompleteRidePanel}/>
            </div> */}
        </div>
    );
};

export default CaptainHome;