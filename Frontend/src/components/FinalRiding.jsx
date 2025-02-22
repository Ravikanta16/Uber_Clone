import React from 'react';
import { Link } from 'react-router-dom';

const FinalRiding = (props) => {
    return (
        <div className='h-screen'>
            <div className='h-4/5'>
                <div className='fixed'>
                    <img className='p-4 w-16 mb-8'src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=2400"/>
                    <Link to ='/home' className='fixed border rounded-full bg-gray-100 flex items-center h-10 w-10 justify-center right-4 top-4'>
                        <h4 className='text-lg font-medium'><i className="ri-logout-box-r-line"></i></h4>
                    </Link>
                </div>
                <img className='h-full w-full' src='https://t3.ftcdn.net/jpg/07/28/30/26/240_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg'></img>
            </div>
            <div onClick={()=>{
                props.setFinalRidePanel(false)
            }}
                className='bg-yellow-400 h-1/5 px-8'>
                <h5><i className="flex w-full text-center justify-center text-2xl font-medium text-yellow-600 ri-arrow-up-wide-fill"></i></h5>
                <div className='flex items-center justify-between mt-4'>
                    <h4 className='text-lg font-medium'>4 Km Away</h4>
                    <Link to ="/completeRiding" className='bg-green-500 text-white w-1/2 rounded-md p-2'>Complete Ride</Link>
                </div>
            </div>
        </div>
    );
};

export default FinalRiding;