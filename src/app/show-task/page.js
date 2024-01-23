import React from 'react'

export const metadata = {
    title: 'Show task - ' + process.env.SITE_NAME
}

const ShowTask = () => {
  return (
    <div className='text-5xl flex justify-center'>
        <h1>Show task page</h1>
    </div>
  )
}

export default ShowTask