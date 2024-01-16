import { getErrorResponse } from "@/helper/getErrorResponse";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        let tasks = await Task.find()
        console.log(tasks)
        return NextResponse.json(tasks, {status: 200, statusText: 'Tasks fetched'})
    } catch (error) {
        // return NextResponse.json({message:'Success message for the works api'})
        return getErrorResponse('Error while fetching tasks !!', 404, 'Tasks not fetched')
    }
}

export async function POST(request) {

    const {title, content, userId} = await request.json()
    const task = new Task({
        title,
        content,
        userId
    })

    try {
        const createdTask = await task.save()
        console.log(createdTask)
        return NextResponse.json(createdTask, {
            status: 201,
            statusText: 'Task created'
        })
    } catch (error) {
        console.log(error)
        return getErrorResponse('Error while creating task !!', 500, 'Tasks not created')
    }
}
