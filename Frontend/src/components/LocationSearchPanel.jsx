import React from 'react';

const LocationSearchPanel = (props) => {
    const location = [
        "Gali no.2 TriNagar, New Delhi",
        "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
        "Connaught Cir, Connaught Place, New Delhi, Delhi 110001, India",
        "Mahatma Gandhi Road, Bengaluru, Karnataka 560001, India",
        "Howrah, West Bengal 711101, India"
    ]

    return (
        <div className='p-12'>
            {
                location.map(function(elem,idx){
                    return <div key={idx} onClick={()=>{
                        props.setVehiclePanelOpen(true);
                        props.setPanelOpen(false);
                    }}
                    className='flex flex-row gap-2 active:border-black bg-gray-50 rounded-md p-1 mb-4'>
                        <h4><i className="border bg-gray-200 rounded-lg p-1 ri-map-pin-fill"></i></h4>
                        <h2>{elem}</h2>
                    </div>
                })
            }
        </div>  
    );
};

export default LocationSearchPanel;