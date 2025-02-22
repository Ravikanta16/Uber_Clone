import React from 'react';
import { useEffect } from 'react';

const LookingForDriver = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.setVehicleFound(false);
            props.setWaitingDriver(true);
        }, 20000);

        // return () => clearTimeout(timer); // Cleanup function
    }, []); 

    // const timer = setTimeout(() => {
    //     props.setVehicleFound(false);
    //     props.setWaitingDriver(true);
    // }, 20000);

    return (
        <div>
            <h5 className='w-full text-center' onClick={()=>{
                props.setVehicleFound(false)
            }}><i className="text-lg text-gray-300 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4'>Looking for a driver</h3>
            <div className='flex justify-between items-center flex-col'>
                <img className='h-28 border rounded-full bg-gray-100' src='https://imgs.search.brave.com/8XAviu7xl0bXELAVDTwzQgDAiOFEo3mjJKqOtMEClbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9jYXItNDQtMi0z/MDB4MjEyLnBuZw'></img>
                <div className='flex mt-4 w-full gap-3 active:border-black bg-gray-50 rounded-md p-1 border-b-2 mb-4'>
                    <h4><i className="items-center border bg-gray-200 rounded-lg p-1 ri-map-pin-user-fill"></i></h4>
                    <div>
                        <h5 className='text-lg font-medium'>511/11 A</h5>
                        <p className='text-sm text-gray-600'>Gali no.2 TriNagar, New Delhi</p>
                    </div>
                </div>
                <div className='flex w-full gap-3 active:border-black bg-gray-50 rounded-md p-1 border-b-2 mb-4'>
                    <h4><i className="border bg-gray-200 rounded-lg p-1 ri-map-pin-fill"></i></h4>
                    <div>
                        <h5 className='text-lg font-medium'>511/11 A</h5>
                        <p className='text-sm text-gray-600'>Gali no.2 TriNagar, New Delhi</p>
                    </div>
                </div>
                <div className='flex w-full gap-3 active:border-black bg-gray-50 rounded-md p-1 mb-4'>
                    <h4><i className="border bg-gray-200 rounded-lg p-1 ri-currency-line"></i></h4>
                    <div>
                        <h5 className='text-lg font-medium'>₹180.45</h5>
                        <p className='text-sm text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookingForDriver;