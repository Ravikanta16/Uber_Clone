import React from 'react';

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='w-full text-center' onClick={()=>{
                props.setRidePopUpPanel(false)
            }}><i className="text-lg text-gray-300 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4 p-2'>New Ride Available!</h3>
            <div className='p-4 w-full flex justify-between bg-yellow-400 rounded-lg mb-4'>
                <div className='flex items-center justify-between gap-3'>
                    <img className='border rounded-full h-16 w-16' src="https://imgs.search.brave.com/1_el-TyGEJ-GI_DOL2wxNO8XiurgdE4Wh6ll7GM8YVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNlc2hvd2Jpei5j/b20vaW1hZ2VzL3Bo/b3RvL3Bhc3Nlbmdl/ci5qcGc" alt=""/>
                    <h4 className='text-lg font-semibold'>Harshit</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='text-lg font-semibold'>₹290</h4>
                    <p className='text-gray-600'>2.2km</p>
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
            <div className='flex items-center justify-end gap-3 right-4 p-4'>
                <button onClick={()=>{
                    props.setRidePopUpPanel(false)
                }} 
                className='bg-gray-300 text-gray-500 w-1/4 rounded-md p-2'>Ignore</button>
                <button onClick={()=>{
                    props.setRidePopUpPanel(false)
                    props.setConfirmRidePopUpPanel(true)
                }}
                className='bg-green-500 text-white w-1/4 rounded-md p-2'>Accept</button>
            </div>
        </div>
    );
};

export default RidePopUp;