import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext } from 'react';

const CaptainSignUp = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [color,setColor]=useState('')
    const [plate,setPlate]=useState('')
    const [capacity,setCapacity]=useState('')
    const [vehicleType,setVehicleType]=useState('')
    // const [captainData,setCaptainData]=useState({})
    const {captainData,setCaptainData} = useContext(CaptainDataContext)
    const navigate = useNavigate();

    const submitHandler= async (e)=>{
        e.preventDefault();
        const newCaptain={
            fullname:{
                firstname:firstName,
                lastname:lastName
            },
            email:email,
            password:password,
            vehicle:{
                color:color,
                plate:plate,
                capacity:capacity,
                vehicleType:vehicleType
            }
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);
            if (response.status === 201) {
                const data = response.data;
                console.log(data);
                setCaptainData(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain/home');
            }
        } catch (error) {
            console.error('Error registering captain:', error);
        }

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setColor('')
        setPlate('')
        setCapacity('')
        setVehicleType('')
    }
    return (
        <div className='p-4 h-screen w-full flex justify-between flex-col'>
        <div>
        <img className='w-16 mb-5'src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=2400"/>
            <form onSubmit={(e)=>{
                submitHandler(e)}
            }>
                <h1 className='text-base font-medium mb-1'>What's our captain's Name?</h1>
                <div className='flex gap-4'>
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-2 px-1 py-1' 
                        required type='text'
                        placeholder='first name'
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)}
                        }
                    />
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-2 px-1 py-1' 
                        type='text' 
                        placeholder='last name'
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)}
                        }
                    />
                </div>
                
                <h1 className='text-base font-medium mb-1'>Email Address</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-2 px-1 py-1' 
                    required type='email' 
                    placeholder='email@example.com'
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)}
                    }
                />

                <h1 className='text-base font-medium mb-1'>Enter Password</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-2 px-1 py-1' 
                    required type='password' 
                    placeholder='password'
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)}
                    }
                />

                <h1 className='text-base font-medium mb-1'>Vehicle Information</h1>
                <div className='flex gap-4'>
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-2 px-1 py-1' 
                        required type='text'
                        placeholder='color'
                        value={color}
                        onChange={(e)=>{
                            setColor(e.target.value)}
                        }
                    />

                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-2 px-1 py-1' 
                        required type='text' 
                        placeholder='plate'
                        value={plate}
                        onChange={(e)=>{
                            setPlate(e.target.value)}
                        }
                    />
                </div>

                <div className='flex gap-4'>
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-2 px-1 py-1' 
                        required type='number' 
                        placeholder='capacity'
                        value={capacity}
                        onChange={(e)=>{
                            setCapacity(e.target.value)}
                        }
                    />

                    <select 
                        className='bg-slate-200 border rounded w-1/2 mb-2 px-1 py-1' 
                        required value={vehicleType}
                        onChange={(e)=>{
                            setVehicleType(e.target.value)}
                        }
                    >
                        <option value=''>Select Vehicle Type</option>
                        <option value='car'>Car</option>
                        <option value='bike'>Bike</option>
                        <option value='auto'>Auto</option>
                    </select>
                </div>
                <button className='w-full rounded bg-black text-white font-bold mt-2 px-2 py-2'>Create Account</button>
            </form> 
            <p className='justify-center mb-2'>Already have an account?<Link to='/captainlogin' className='text-blue-400'>Login here</Link></p>
            <p className='justify-center'>Are you a user?<Link to='/signup' className='text-red-400'>Switch to user signup.</Link></p>
        </div>
        <div>
            <p className='text-[6px] leading-tight'>
            We are committed to protecting your privacy and ensuring the security of your personal information.
            We collect and use your data, such as name, contact details, and location, to provide efficient ride services, 
            process payments, and enhance your experience. Your information is shared only with necessary service partners, 
            to fulfill your requests and is never sold to third parties.For any concerns, contact us anytime.
            </p>
        </div>
        </div>
    );
};

export default CaptainSignUp;