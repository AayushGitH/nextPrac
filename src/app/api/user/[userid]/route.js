import { User } from "@/models/user";
import { NextResponse } from "next/server";


export async function DELETE(request,{params}) {
    console.log(params)
    const {userid} = params
    try {
        await User.deleteOne({
            _id: userid
        })
        return NextResponse.json({message:'Successfully deleted the user'})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Error while deleting the user'})
    }
}

export async function GET(request,{params}) {
    const  userid = params.userid

    // Throwing user without password field
    const user = await User.findById(userid).select('-password');
    return NextResponse.json(user,
    {status:200, statusText: 'User fetched'})
}

export async function PUT(request,{params}) {
    const  userid = params.userid
    const {name, password, about, profileURL} = await request.json()

    try {
        const user = await User.findById(userid)
        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURL = profileURL;

        const updatedUser = await user.save();
        return NextResponse.json(updatedUser)
    } catch (error) {
        return NextResponse.json({message:"Some error has caught while updating the user"},
        {status:500, statusText: 'User updation failure'})       
    }
}