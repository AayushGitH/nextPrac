import Link from 'next/link'
import React from 'react'

const CustomNavbar = () => {
    console.log('Navbar component render method')
    return (
        <nav className='bg-blue-600 px-2 h-12 flex justify-between items-center'>
            <div className='text-xl font-bold'>
                <a href="#!">Work Manager</a>
            </div>
            <div>
                <ul className='flex space-x-2'>
                    <Link href={'/'} className='hover:text-blue-200'>Home</Link>
                    <Link href={'/add-task'} className='hover:text-blue-200'>Add task</Link>
                    <Link href={'/show-task'} className='hover:text-blue-200'>Show task</Link>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-2'>
                    <li><Link href={'/login'}>Login</Link></li>
                    <li><Link href={'/signup'}>Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default CustomNavbar