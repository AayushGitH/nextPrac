import { getErrorResponse } from "@/helper/getErrorResponse";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const taskId = params.taskid
    console.log('The task id is',taskId)
    try {
        const task = await Task.findById(taskId)
        console.log(task)
        return NextResponse.json(task, {
            status: 200,
            statusText: 'Get single task'
        })
    } catch (error) {
        console.log(error)
        return getErrorResponse('Error while fetching the task', 400, 'Task not fetched')
    }
}

export async function PUT(request, {params}) {
    const taskId = params.taskid
    console.log('The task id is',taskId)
    try {
        const task = await Task.findById(taskId)
        const { title, content } = await request.json()
        task.title = title
        task.content = content
        const updatedTask = await task.save()

        return NextResponse.json(updatedTask, {
            status: 200,
            statusText: 'Successfully updated task'
        })
    } catch (error) {
        console.log(error)
        return getErrorResponse('Error while updating task', 400, 'Uncexpected error caught')
    }
}

export async function DELETE(request, {params}) {
    const taskId = params.taskid
    console.log('The task id is',taskId)
    try {
        // const task = await Task.findById(taskId)
        await Task.deleteOne({
            _id: taskId
        })

        return NextResponse.json({
            message: 'Successfully deleted the task',
            status: true
        }, {
            status: 200,
            statusText: 'Successfully deleted task'
        })
    } catch (error) {
        console.log(error)
        return getErrorResponse('Error while deleting the task', 400, 'Task not deleted')
    }
}