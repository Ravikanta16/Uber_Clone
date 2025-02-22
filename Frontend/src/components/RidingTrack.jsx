import React from 'react';
import { Link } from 'react-router-dom';

const RidingTrack = () => {
    return (
        <div className='h-screen'>
            <Link to ='/home' className='fixed border rounded-full bg-gray-100 flex items-center h-10 w-10 justify-center right-2 top-2'>
                <h4 className='text-lg font-medium'><i className="ri-home-5-line"></i></h4>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full' src='https://t3.ftcdn.net/jpg/07/28/30/26/240_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg'></img>
            </div>
            <div className='h-1/2'>
            <div className='p-2 flex justify-between flex-col'>
                <div className='flex items-center justify-between mb-2'>
                    <img className='h-28' src='https://imgs.search.brave.com/8XAviu7xl0bXELAVDTwzQgDAiOFEo3mjJKqOtMEClbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9jYXItNDQtMi0z/MDB4MjEyLnBuZw'></img>
                    <div className='text-right flex flex-col justify-end'>
                        <h3 className='text-gray-600 font-medium -mb-2'>SANTH</h3>
                        <h2 className='text-xl font-bold -mb-2'>RJ31GA-24</h2>
                        <p className='text-gray-600 -mb-2'>Maruti Suzuki</p>
                        <h4><i className="text-gray-600 ri-star-s-fill">4.8</i></h4>
                    </div>
                </div>
                <div className='flex w-full gap-3 active:border-black bg-gray-50 rounded-md p-1 border-b-2 mb-4'>
                    <h4><i className="border bg-gray-200 rounded-lg p-1 ri-map-pin-fill"></i></h4>
                    <div>
                        <h5 className='text-lg font-medium'>511/11 A</h5>
                        <p className='text-sm text-gray-600'>Gali no.2 TriNagar, New Delhi</p>
                    </div>
                </div>
                <div className='flex w-full gap-3 active:border-black bg-gray-50 rounded-md p-1 border-b-2 mb-4'>
                    <h4><i className="border bg-gray-200 rounded-lg p-1 ri-currency-line"></i></h4>
                    <div>
                        <h5 className='text-lg font-medium'>₹180.45</h5>
                        <p className='text-sm text-gray-600'>Cash Cash</p>
                    </div>
                </div>
                <button className='bg-green-600 text-white font-semibold w-full mt-4 py-1 rounded-lg'>Make a Payment</button>
            </div>
            </div>
        </div>
    );
};

export default RidingTrack;