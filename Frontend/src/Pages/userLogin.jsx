import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [userData,setUserData]=useState({})
    const {userData,setUserData}=useContext(UserDataContext)
    const navigate=useNavigate()

    const submitHandler= async (e)=>{
        e.preventDefault();

        const UserDetails = {
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,UserDetails);
        if(response.status === 201){
            const data=response.data;
            setUserData(data.user)  
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
        // setUserData({
        //     email:email,
        //     password:password
        // })
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 h-screen w-full flex justify-between flex-col'>
        <div>
            <img className='w-16 mb-8' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"></img>
            <form onSubmit={(e)=>{
                submitHandler(e)}
            }>
                <h1 className='text-xl font-medium mb-2'>What's your Email?</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-7 px-2 py-2' 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)}
                    }
                    required type='email' 
                    placeholder='email@example.com'
                
                />
                <h1 className='text-xl font-medium mb-2'>Enter Password</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-7 px-2 py-2' 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)}
                    }
                    required type='password' 
                    placeholder='password'
                />
                <button className='w-full rounded bg-black text-white font-bold px-2 py-2'>Login</button>
            </form> 
            <p className='justify-center'>New here?<Link to='/signup' className='text-blue-400'>Create New Account</Link></p>
        </div>
        <div>
            <Link to='/captainlogin' className='flex justify-center bg-green-700 w-full rounded font-bold px-2 py-2'>Sign in As Captain</Link>
        </div>
        </div>
    );
};

export default UserLogin;