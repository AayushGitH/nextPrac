'use client'
import React, { useState } from 'react'
import signupbanner from '../../assets/signupImage.svg'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { loginUser } from '@/services/userService'
import { useRouter } from 'next/navigation'


const LoginPage = () => {
    const router = useRouter()

    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })

    const doLogin = async(event) => {
        event.preventDefault()
        console.log(loginData)

        try {
            const result = await loginUser(loginData)
            console.log(result)
            toast.success('Logged in')
            router.push('/profile')
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message, {
                position:'top-center'
            })
        }
    }
  return (
    <div className='grid grid-cols-12'>
    <div className='col-span-4 col-start-5 rounded-xl bg-slate-800'>
        <form onSubmit={doLogin}>

            <div className='p-5'>
                <div className='flex justify-center'>
                    <Image src={signupbanner} alt='signup image' style={{ width: '8rem' }} />
                </div>
                <h1 className='text-3xl text-center'>Login</h1>

                <div className='mt-4 px-3'>
                    <label htmlFor='user_name' className='block text-sm font-medium mb-2'>
                        Name
                    </label>
                    <input type='text' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='user_email'
                        name='user_email'
                        onChange={(event) => {
                            setLoginData({
                                ...loginData,
                                email: event.target.value
                            })
                        }}
                        value={loginData.email} />
                </div>

                <div className='mt-4 px-3'>
                    <label htmlFor='user_password' className='block text-sm font-medium mb-2'>
                        Password
                    </label>
                    <input type='password' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='user_password'
                        name='user_password'
                        onChange={(event) => {
                            setLoginData({
                                ...loginData,
                                password: event.target.value
                            })
                        }}
                        value={loginData.password} />
                </div>

                <div className='mt-4 flex justify-center'>
                    <button className='bg-blue-800 py-1 px-2 rounded' name='save' type='submit'>Login</button>
                    <button className='bg-yellow-600 py-1 ms-2 px-3 rounded' name='reset' type='reset'>Reset</button>
                </div>

                {/* {JSON.stringify(data)} */}
            </div>
        </form>
    </div>
</div>
  )
}

export default LoginPage
