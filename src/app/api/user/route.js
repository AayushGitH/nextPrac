import { connectDB } from "@/app/helper/db"
import { User } from "@/models/user"
import { NextResponse } from "next/server"

connectDB()

export async function GET() {
    let users = []
    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'Failed to load users',
            status: false
        })
    }

    return NextResponse.json(users)
}

export function PUT() {
}

export const POST = async(request) => {

    // Fetch user detail from request object
    // Putting await before request because it returns promise
    const {name, email, password, about, profileURL} = await request.json()
    const user = new User({
        name, 
        email, 
        password, 
        about, 
        profileURL
    })

    console.log('The object passed is - ', name, email, password, about, profileURL)

    try {
        const createdUser = await user.save()
        console.log(createdUser)
        const response = NextResponse.json(user,{
            status: 201, 
            statusText: 'User created'
        })

        return response
    } catch (error) {
        console.log('Some error has been occured while creating the user')
        console.log(error)
        return NextResponse.json({
            message:'Failed to create user',
            status: false
        })
    }
}

export function DELETE(request) {
    console.log('The id for the deletion is - ', request.nextUrl.searchParams)
    return NextResponse.json({
        message:'Successfully deleted',
        status:true
    }, {status: 200, statusText:'Item deleted'})
}