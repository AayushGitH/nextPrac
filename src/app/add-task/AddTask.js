// Client component
"use client";
import React, { useState } from 'react'
import loginImage from '../../assets/loginImage.svg'
import Image from 'next/image'
import { addTask } from '@/services/taskService';
import { toast } from 'react-toastify';

const AddTask = () => {
    const [task,setTask] = useState({
        title: "",
        content: "", 
        status: "",
        userId: "65a53ccc5404d98dd516b1c0"
    })

    // console.log('I am under the add task page console')

    const handleAddTask = async (event) => {
        event.preventDefault()
        console.log(event)
        console.log("I am pressed")

        try {

            const result = await addTask(task)
            console.log(result)
            toast.success('Your task is succesfully added', {
                position: 'top-center'
            })

            setTask({
                title:'',
                content:'',
                status:'none'
            })
        } catch (error) {
            console.log(error)
            toast.error('Some error has occurred', {
                position: 'top-center'
            })
        }
    }

    return (
        <div className='grid grid-cols-12 text-white justify-center'>
            <div className='bg-slate-800 col-span-6 col-start-4 rounded-xl p-5'>
            {/* <button className='bg-blue-800 py-2 px-3 rounded-xl' name='save' onClick={e=>handleAddTask(e)}>Add todo</button> */}
                <form action='#!' onSubmit={handleAddTask}>
                    <div className='flex justify-center'>
                        <Image src={loginImage} style={{ width: '30%' }} alt='Logging image' />
                    </div>
                    <h1 className='flex justify-center font-bold mt-3'>Add your task here</h1>
                    <div className='mt-4'>
                        <label htmlFor='task_title' className='block text-sm font-medium mb-2'>
                            Title
                        </label>
                        <input type='text' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_title' name='task_title'
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                title: event.target.value
                            })
                        }}
                        value={task.title}/>
                    </div>

                    <div className='mt-4'>
                        <label htmlFor='task_content' className='block text-sm font-medium mb-2'>
                            Content
                        </label>
                        <textarea type='text' className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_content' name='task_content'
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                content: event.target.value
                            })
                        }}
                        value={task.content}/>
                    </div>

                    <div className='mt-4'>
                        <label htmlFor='task_content' className='block text-sm font-medium mb-2'>
                            Status
                        </label>
                        <select className='w-full p-1 rounded-xl bg-gray-400 focus:ring-gray-400 ' id='task_content' name='task_status'
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                status: event.target.value
                            })
                        }}
                        value={task.status}>
                            <option value='none'>--- Select Status ---</option>
                            <option value='Pending'>Pending</option>
                            <option value='Completed'>Completed</option>
                        </select>
                    </div>

                    <div className='mt-4 flex justify-center'>
                        <button className='bg-blue-800 py-2 px-3 rounded-xl' name='save' type='submit'>Add task</button>
                        <button className='bg-red-800 ms-2 py-2 px-3 rounded-xl' name='reset' type='reset'>Clear</button>
                    </div>

                    {/* {JSON.stringify(task)} */}
                </form>
            </div>
        </div>
    )
}

export default AddTask