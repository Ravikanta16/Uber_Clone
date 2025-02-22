import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-[url(https://imgs.search.brave.com/y5j7nSocPX47QnP6CTa0mocRWhw9rWE3COvm2q9g5vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90cmFmZmljLWxp/Z2h0LWdyZWVuLXJv/YWQtc2lnbmFsLXll/bGxvdy10cmFmZmlj/bGlnaHQtcm9hZHdh/eS1jbG91ZC1iYWNr/Z3JvdW5kLWNvbG9y/ZnVsLWdvLXdhcm5p/bmctc2lnbl84MzE5/NC0xMjcyLmpwZz9z/ZW10PWFpc19oeWJy/aWQ)] h-screen w-full pt-3 flex justify-between flex-col'>
                <img className='w-14 ml-3' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"></img>
                <div className='bg-white py-4 px-4 pb-6'>
                    <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
                    <Link to='/login' className='flex justify-center w-full rounded bg-black text-white mt-4 py-3'>Continue</Link>
                </div>
            </div>
        </div>
    );
};

export default Start;