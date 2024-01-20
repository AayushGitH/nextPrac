import Image from 'next/image'

export const metadata = {
  title: 'Home - ' + process.env.SITE_NAME
}

export default function Home() {
  return (
    <div className='text-5xl'>
      <h1>Home page</h1>
    </div>
  )
}
