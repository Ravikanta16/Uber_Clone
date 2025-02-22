import React from 'react';

const VehiclePanel = (props) => {
    return (
        <div>
                <h5 className='w-full text-center' onClick={()=>{
                    props.setVehiclePanelOpen(false)
                }}><i className="text-lg text-gray-300 ri-arrow-down-wide-fill"></i></h5>
                <h3 className='text-2xl font-semibold mb-4'>Choose a Vehicle</h3>
                <div onClick={()=>{
                    props.setConfirmRide(true)
                }}
                    className='flex items-center justify-between active:border-black border-2 bg-gray-100 rounded-lg w-full p-4 gap-2 mb-4'>
                    <img className='h-12' src='https://imgs.search.brave.com/8XAviu7xl0bXELAVDTwzQgDAiOFEo3mjJKqOtMEClbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9jYXItNDQtMi0z/MDB4MjEyLnBuZw'></img>
                    <div className=' w-1/2'>
                        <h4 className='font-medium text-base'>UberGo<span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Affordable,compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹180.23</h2>
                </div>
                <div onClick={()=>{
                    props.setConfirmRide(true)
                }} 
                    className='flex items-center justify-between active:border-black border-2 bg-gray-100 rounded-lg w-full p-4 gap-2 mb-4'>
                    <img className='h-12' src='https://imgs.search.brave.com/8TJbmBX12-4pQ4BUcnmPp912TeM9Husb6ou67QrgYzI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1oZC1i/aWtlLW1vdG9yYmlr/ZS1wbmctaGQtNDAw/LnBuZw'></img>
                    <div className='ml-5 w-1/2'>
                        <h4 className='font-medium text-base'>Moto<span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Affordable,bike rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹65.45</h2>
                </div>
                <div onClick={()=>{
                    props.setConfirmRide(true)
                }}
                    className='flex items-center justify-between active:border-black border-2 bg-gray-100 rounded-lg w-full p-4 gap-2 mb-4'>
                    <img className='h-12' src='https://imgs.search.brave.com/RHpGuzSWfShl1C88lkLShQ5rP5dajCxVj81xW6cn3Sk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9BdXRv/LVJpY2tzaGF3LVBO/Ry1GaWxlLnBuZw'></img>
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>UberGo<span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className='font-medium text-sm'>5 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Affordable,compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹110.67</h2>
                </div> 
        </div>
    );
};

export default VehiclePanel;