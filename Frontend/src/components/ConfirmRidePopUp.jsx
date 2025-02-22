import React from 'react';
import { useState } from 'react';
const ConfirmRidePopUp = (props) => {
    const [otp,setOtp]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <h5 className='w-full text-center' onClick={()=>{
                props.setConfirmRidePopUpPanel(false)
            }}><i className="text-lg text-gray-300 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4 p-2'>Confirm this ride to Start</h3>
            <div className='p-4 w-full flex border-t-2 border-yellow-500 rounded-md justify-between bg-yellow-400 mb-2'>
                <div className='flex items-center justify-between gap-3'>
                    <img className='border rounded-full h-16 w-16' src="https://imgs.search.brave.com/1_el-TyGEJ-GI_DOL2wxNO8XiurgdE4Wh6ll7GM8YVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNlc2hvd2Jpei5j/b20vaW1hZ2VzL3Bo/b3RvL3Bhc3Nlbmdl/ci5qcGc" alt=""/>
                    <h4 className='text-lg font-semibold'>Harshit</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='text-lg font-semibold'>₹290</h4>
                    <p className='text-gray-600'>2.2km</p>
                </div>
            </div>
            <div className='flex w-full gap-3 border-gray-100 bg-gray-50 rounded-md p-4 border-b-2 mb-2'>
                <h4><i className="items-center border bg-gray-200 rounded-lg p-1 ri-map-pin-user-fill"></i></h4>
                <div>
                    <p className='text-gray-500 text-sm'>Pick-Up</p>
                    <h5 className='text-lg font-medium'>511/11 A</h5>
                    <p className='text-base'>Gali no.2 TriNagar, New Delhi</p>
                </div>
            </div>
            <div className='flex w-full gap-3 border-gray-100 bg-gray-50 rounded-md p-4 border-b-2 mb-2'>
                <h4><i className="border bg-gray-200 rounded-lg p-1 ri-map-pin-fill"></i></h4>
                <div>
                    <p className='text-gray-500 text-sm'>Drop-off</p>
                    <h5 className='text-lg font-medium'>612/11-B</h5>
                    <p className=' tex-base'>Gali no.8 Pitampura, New Delhi</p>
                </div>
            </div>
            <div className='p-4 bg-gray-50 border-gray-100 rounded-md mb-2'>
                <form onSubmit={(e)=>{
                    submitHandler(e);
                }}>
                    <input className='bg-slate-200 border rounded-lg w-full mb-3 p-2'
                            value={otp}
                            onChange={(e)=>{
                                setOtp(e.target.value)}
                            }
                            required type='text' 
                            placeholder='Enter OTP'
                    />
                <button onClick={()=>{
                    props.setConfirmRidePopUpPanel(false)
                    props.setFinalRidePanel(true)
                }}
                className='bg-green-500 text-white w-full rounded-md justify-end right-4 p-2'>Confirm</button>
                </form>
            </div>
        </div>
    );
}

export default ConfirmRidePopUp;