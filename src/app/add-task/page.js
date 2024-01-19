import React from 'react'

export const metadata = {
    title: 'Add task - ' + process.env.SITE_NAME
}

const AddTask = () => {
    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className='border bg-gray-600 border-blue-600 rounded-2xl col-span-6 col-start-2 p-5'>
                <h1>Add your task here</h1>
                
                <form >
                    <div className='mt-4'>
                        <label htmlFor='task_title' className='block text-sm font-medium mb-2'>
                            Title
                        </label>
                        <input type='text' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_title' />
                    </div>

                    <div className='mt-4'>
                        <label htmlFor='task_content' className='block text-sm font-medium mb-2'>
                            Content
                        </label>
                        <textarea type='text' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_content'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask