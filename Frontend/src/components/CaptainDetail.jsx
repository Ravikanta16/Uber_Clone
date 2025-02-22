import React from 'react';

const CaptainDetail = (props) => {
    return (
        <div>
            <div className='p-6'>
                <div className='flex justify-between px-4 mb-2'>
                    <div className='flex items-center justify-start gap-3'>
                        <img className='border rounded-full h-16 w-16' src="https://imgs.search.brave.com/1_el-TyGEJ-GI_DOL2wxNO8XiurgdE4Wh6ll7GM8YVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNlc2hvd2Jpei5j/b20vaW1hZ2VzL3Bo/b3RvL3Bhc3Nlbmdl/ci5qcGc" alt=""/>
                        <h4 onClick={()=>{
                            props.setRidePopUpPanel(true)
                        }}
                        className='text-lg font-semibold'>Harshit</h4>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h4 className='text-lg font-semibold'>₹290</h4>
                        <p className='text-gray-600'>Earned</p>
                    </div>
                </div>
                <div className='flex justify-between rounded-lg bg-gray-100 py-6 px-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <i className="text-2xl font-medium ri-time-line"></i>
                        <h5 className='text-lg'>10.2</h5>
                        <p className='text-gray-600 font-thin'>Hours Online</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <i className="text-2xl font-medium ri-speed-up-fill"></i>
                        <h5 className='text-lg'>30km/h</h5>
                        <p className='text-gray-600 font-thin'>Total Distance</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <i className="text-2xl font-medium ri-booklet-line"></i>
                        <h5 className='text-lg'>my note</h5>
                        <p className='text-gray-600 font-thin'>my note</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetail;