import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext } from 'react';

const CaptainLogin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [captainData,setCaptainData]=useState({})
    const {captainData,setCaptainData} = useContext(CaptainDataContext)
    const navigate = useNavigate();

    const submitHandler= async (e)=>{
        e.preventDefault();
        const CaptainDetails={
            email:email,
            password:password
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,CaptainDetails);
            if (response.status === 201) {
                const data = response.data;
                setCaptainData(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain/home');
            }
        } catch (error) {
            console.error('Error registering captain:', error);
        }

        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 h-screen w-full flex justify-between flex-col'>
        <div>
            <img className='w-16 mb-8'src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=2400"/>
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
            <p className='justify-center'>Join a fleet?<Link to='/captainsignup' className='text-blue-400'>Register As a Captain</Link></p>
        </div>
        <div>
            <Link to='/login' className='flex justify-center bg-orange-700 w-full rounded font-bold px-2 py-2'>Sign in As User</Link>
        </div>
        </div>
    );
};

export default CaptainLogin;