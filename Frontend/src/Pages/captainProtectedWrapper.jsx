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
            console.log("home page pr nhi jaega me kunki mujhe token nhi mila")
            navigate('/captainlogin');
        }

    },[token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
            if(response.status === 201){
                if(response.data!==null){
                    console.log("home page pr me jaunga kunki mujhe token bhi milgya aur profile bhi")
                    // setIsLoading(false)
                }
                else{
                    console.log("home page pr nhi jaunga kunki response shi nhi mila")
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