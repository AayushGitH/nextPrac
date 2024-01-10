import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({message:'Success message for the works api'})
}

export async function POST(request) {

    const {title, content, userId} = await request.json()

    try {
        const task = new Task({
            title,
            content,
            userId
        })
        const createdTask = task.save()
        return NextResponse.json(createdTask, {
            status: 201,
            statusText: 'Task created'
        })
    } catch (error) {
        
    }
}

export async function PUT() {
    return NextResponse.json({message:'Success message for the works api'})
}

export async function DELETE() {
    return NextResponse.json({message:'Success message for the works api'})
}