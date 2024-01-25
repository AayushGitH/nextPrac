'use client'
import React, { useState } from 'react'
import signupbanner from '../../assets/signupImage.svg'
import Image from 'next/image'
import { addUser } from '@/services/userService'
import { toast } from 'react-toastify'

const Signup = () => {
    // console.log('I am the text under the signup page')

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
        profileURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mbS9s1Gab74WNQ3_-V0vjOjWGZW-OKViHkxIPQf2H7FJWYgujtdedb5h0kFObhKc6gM&usqp=CAU'
    })

    const doSignUp = async(event) => {
        event.preventDefault()
        console.log(data)

        try {
            const result = await addUser(data)
            console.log(result)
            toast.success('User is successfully added')
        } catch (error) {
            console.log(error)
            toast.error('Some unexpected error has caught')
        }
    }

    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4 col-start-5 rounded-xl bg-slate-800'>
                <form onSubmit={doSignUp}>

                    <div className='p-5'>
                        <div className='flex justify-center'>
                            <Image src={signupbanner} alt='signup image' style={{ width: '8rem' }} />
                        </div>
                        <h1 className='text-3xl text-center'>Signup here</h1>

                        <div className='mt-4 px-3'>
                            <label htmlFor='user_name' className='block text-sm font-medium mb-2'>
                                Name
                            </label>
                            <input type='text' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='user_name'
                                name='user_name'
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        name: event.target.value
                                    })
                                }}
                                value={data.name} />
                        </div>

                        <div className='mt-4 px-3'>
                            <label htmlFor='user_email' className='block text-sm font-medium mb-2'>
                                Email
                            </label>
                            <input type='email' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='user_email'
                                name='user_email'
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        email: event.target.value
                                    })
                                }}
                                value={data.email} />
                        </div>

                        <div className='mt-4 px-3'>
                            <label htmlFor='user_password' className='block text-sm font-medium mb-2'>
                                Password
                            </label>
                            <input type='password' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='user_password'
                                name='user_password'
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        password: event.target.value
                                    })
                                }}
                                value={data.password} />
                        </div>

                        <div className='mt-4 px-3'>
                            <label htmlFor='user_about' className='block text-sm font-medium mb-2'>
                                About
                            </label>
                            <textarea type='text' style={{ maxHeight: '150px', minHeight: '35px' }} className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='user_about'
                                name='user_about'
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        about: event.target.value
                                    })
                                }}
                                value={data.about} />
                        </div>

                        <div className='mt-4 flex justify-center'>
                            <button className='bg-blue-800 py-1 px-2 rounded' name='save' type='submit'>Sign up</button>
                            <button className='bg-yellow-600 py-1 ms-2 px-3 rounded' name='reset' type='reset'>Reset</button>
                        </div>

                        {
                            JSON.stringify(data)
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
