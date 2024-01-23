'use client'
import React from 'react'
import signupbanner from '../../assets/signupImage.svg'
import Image from 'next/image'

const Signup = () => {
    console.log('I am the text under the signup page')
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4 col-start-5 rounded-xl bg-slate-800'>
                <div className='p-5'>
                    <div className='flex justify-center'>
                        <Image src={signupbanner} alt='signup image' style={{ width: '8rem' }} />
                    </div>
                    <h1 className='text-3xl text-center'>Signup here</h1>

                    <div className='mt-4 px-3'>
                        <label htmlFor='user_name' className='block text-sm font-medium mb-2'>
                            Name
                        </label>
                        <input type='text' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_title' name='user_name' />
                    </div>

                    <div className='mt-4 px-3'>
                        <label htmlFor='user_email' className='block text-sm font-medium mb-2'>
                            Email
                        </label>
                        <input type='email' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_title' name='user_email' />
                    </div>

                    <div className='mt-4 px-3'>
                        <label htmlFor='user_password' className='block text-sm font-medium mb-2'>
                            Password
                        </label>
                        <input type='password' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_title' name='user_password' />
                    </div>

                    <div className='mt-4 px-3'>
                        <label htmlFor='user_about' className='block text-sm font-medium mb-2'>
                            About
                        </label>
                        <textarea type='text' style={{ maxHeight: '150px', minHeight: '35px' }} className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_title' name='user_about' />
                    </div>

                    <div className='mt-4 flex justify-center'>
                        <button className='bg-blue-800 py-1 px-2 rounded' name='save' type='submit'>Sign up</button>
                        <button className='bg-yellow-600 py-1 ms-2 px-3 rounded' name='reset' type='reset'>Reset</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup
