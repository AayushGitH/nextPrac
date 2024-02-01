import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const POST = async(request) => {
    const {email, password} = await request.json()
    try {

        // 1. Get user
        const user = await User.findOne({
            email: email
        })
        if(user == null) {
            throw new Error('User not found')
        }

        // 2. Checking password
        const matched = bcrypt.compareSync(password, user.password)
        if(!matched) {
            throw new Error('Password not matched')
        }

        // 3. Generate token
        const token = jwt.sign({
            _id:user._id,
            name:user.name
        }, process.env.JWT_KEY)

        console.log('My generated token is ', token)
        console.log(user)

        const response = NextResponse.json({
            message: 'Login successfull !!',
            status: true
        })

        // 4. Setting cookies
        response.cookies.set('authToken', token, {
            expiresIn: "1d",
            httpOnly: true
        })

        return response
        
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