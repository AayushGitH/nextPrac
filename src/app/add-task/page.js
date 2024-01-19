import React from 'react'

export const metadata = {
    title: 'Add task - ' + process.env.SITE_NAME
}

const AddTask = () => {
    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className='border border-red-600 col-span-6 col-start-4 p-5'>
                <h1>Add your task here</h1>
                
            </div>
        </div>
    )
}

export default AddTask