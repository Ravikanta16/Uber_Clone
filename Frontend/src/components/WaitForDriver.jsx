import React from 'react';

const WaitForDriver = (props) => {
    return (
        <div>
            <h5 className='w-full text-center' onClick={()=>{
                props.setWaitingDriver(false)
            }}><i className="text-lg text-gray-300 ri-arrow-down-wide-fill"></i></h5>
            <div className='flex border-b-2 border-gray-300 justify-between mb-2'>
                <h3 className='text-2xl font-semibold mb-4'>Meet at the pickup point</h3>
                <div className='flex flex-col px-3 items-center justify-center border bg-black mb-2'>
                    <h4 className='text-white'>2</h4>
                    <p className='text-white'>Min</p>
                </div>
            </div>
            <div className='flex justify-between flex-col'>
                <div className='flex items-center justify-between border-b-2 border-gray-300'>
                    <img className='h-28' src='https://imgs.search.brave.com/8XAviu7xl0bXELAVDTwzQgDAiOFEo3mjJKqOtMEClbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9jYXItNDQtMi0z/MDB4MjEyLnBuZw'></img>
                    <div className='text-right flex flex-col justify-end'>
                        <h3 className='text-gray-600 font-medium -mb-2'>SANTH</h3>
                        <h2 className='text-xl font-bold -mb-2'>RJ31GA-24</h2>
                        <p className='text-gray-600 -mb-2'>Maruti Suzuki</p>
                        <h4><i className="text-gray-600 ri-star-s-fill">4.8</i></h4>
                    </div>
                </div>
                <div className='flex mt-4 w-full gap-3 p-1 mb-4'>
                    <h4 className='mt-3'><i className="items-center border bg-gray-200 rounded-lg p-1 ri-map-pin-user-fill"></i></h4>
                    <div>
                        <h5 className='text-lg font-medium'>511/11 A</h5>
                        <p className='text-sm text-gray-600'>{props.pickUp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitForDriver;