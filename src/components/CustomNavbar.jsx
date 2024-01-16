import Link from 'next/link'
import React from 'react'

const CustomNavbar = () => {
    console.log('Navbar component render method')
  return (
    <nav className='bg-blue-600 py-2 px-2 h-12 flex justify-between items-center'>
        <div >
            <a href="#!">Work Manager</a>
            </div>
        <div>
            <ul className='flex space-x-2'>
                <Link href={'/'}>Home</Link>
                <li><a href="#">Add task</a></li>
                <li><a href="#">Show tasks</a></li>
            </ul>
        </div>
        <div>
        <ul className='flex space-x-2'>
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default CustomNavbar