import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
const UserSignUp = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [userData,setUserData]=useState({})

    const navigate = useNavigate();

    const {userData,setUserData} = useContext(UserDataContext)

    const submitHandler= async (e)=>{
        e.preventDefault();

        // setUserData({
        //     fullName:{
        //         firstName:firstName,
        //         lastName:lastName
        //     },
        //     email:email,
        //     password:password
        // })

        const newUser = {
            fullname:{
                firstname:firstName,
                lastname:lastName
            },
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
        if(response.status === 201){
            const data=response.data;
            setUserData(data.user)  
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
        
        setFirstName('')
        setLastName('')
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
                <h1 className='text-lg font-medium mb-2'>What's your Name?</h1>
                <div className='flex gap-4'>
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-5 px-1 py-1' 
                        required type='text'
                        placeholder='first name'
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)}
                        }
                
                    />
                    <input 
                        className='bg-slate-200 border rounded w-1/2 mb-5 px-1 py-1' 
                        required type='text' 
                        placeholder='last name'
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)}
                        }
                    />
                </div>
                
                <h1 className='text-lg font-medium mb-2'>Email Address</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-5 px-1 py-1' 
                    required type='email' 
                    placeholder='email@example.com'
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)}
                    }
                
                />
                <h1 className='text-lg font-medium mb-2'>Enter Password</h1>
                <input 
                    className='bg-slate-200 border rounded w-full mb-5 px-1 py-1' 
                    required type='password' 
                    placeholder='password'
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)}
                    }
                />
                <button className='w-full rounded bg-black text-white font-bold px-2 py-2'>Create Account</button>
            </form> 
            <p className='justify-center mb-2'>Already have an account?<Link to='/login' className='text-blue-400'>Login here</Link></p>
            <p className='justify-center'>Are you a captain?<Link to='/captainsignup' className='text-green-500'>Switch to captain signup.</Link></p>
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

export default UserSignUp;