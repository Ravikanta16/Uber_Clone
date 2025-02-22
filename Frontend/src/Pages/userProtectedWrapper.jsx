import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {
    // const {userData} = useContext(UserDataContext);
    const navigate = useNavigate();
    // const [isLoading,setIsLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
          navigate("/login");
        }
    }, [token]); 

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
          Authorization:`Bearer ${token}`
      }
    }).then((response)=>{
        if(response.status === 200){
          if(response.data!==null){
            console.log(response.data)
          }
          else{
            navigate('/login')
          }
          // console.log(response.data)
          // setIsLoading(false)
        }
    }).catch(err=>{
        console.log(err)
        navigate('/login')
    })

    // if(isLoading){
    //   return <div>Loading...</div>
    // }

    return (
        <>
            {children}
        </>
    );
};

export default UserProtectedWrapper;