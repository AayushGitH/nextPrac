import { getErrorResponse } from "@/app/helper/getErrorResponse"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"

export async function GET(request,{params}) {
    try {
        const userid = params.userid
        console.log('The user id is -', userid)
        let tasks = await Task.find({
            userId:userid
        })
        console.log(tasks)
        return NextResponse.json(tasks, {status: 200, statusText: 'Tasks fetched'})
    } catch (error) {
        // return NextResponse.json({message:'Success message for the works api'})
        return getErrorResponse('Error while fetching tasks of the particular user !!', 404, 'Tasks not fetched')
    }
}