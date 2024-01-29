import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST = async(request) => {
    const {email, password} = await request.json()
    try {

        const user = await User.findOne({
            email: email
        })
        if(user == null) {
            throw new Error('User not found')
        }

        const matched = bcrypt.compareSync(password, user.password)
        if(!matched) {
            throw new Error('Password not matched')
        }

        console.log(user)
        return NextResponse.json({
            message: 'Successfully fetched user',
            status: true
        },{
            status: 200,
            statusText: 'Mil gaya'
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:error.message,
            success:false
        },{
            status: 500,
            statusText: 'Internal error aayi hai'
        })
    }
}