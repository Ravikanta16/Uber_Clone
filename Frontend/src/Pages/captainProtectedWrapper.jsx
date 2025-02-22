import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {
    const navigate = useNavigate();
    // const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(!token){
            navigate('/captainlogin')
        }
    },[token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
            if(response.status === 200){
                if(response.data!==null){
                    console.log(response.data)
                }
                else{
                    navigate('/captainlogin')
                }
                // console.log(response.data)
                // setIsLoading(false)
            }
    }).catch(err=>{
        console.log(err)
        navigate('/captainlogin')
    })

    // if(isLoading){
    //     return <div>Loading...</div>
    // }

    return (
        <>
            {children}
        </>
    );
};

export default CaptainProtectedWrapper;