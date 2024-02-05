import { connectDB } from '@/helper/db'
import Image from 'next/image'

export const metadata = {
  title: 'Home - ' + process.env.SITE_NAME
}

export default function Home() {
  connectDB()
  return (
    <div className='text-5xl flex justify-center'>
      <h1>Home page</h1>
    </div>
  )
}
