import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const userId = params.userid
    const postId = params.postid
    console.log(`Fetching the user - ${userId} with post - ${postId}`)
    return NextResponse.json({message:'Successfully fetched post under user'},
    {status:202, statusText:'Fetched post under user'})
}

export async function POST(request, {params}) {
    // console.log(request.body, params.postid)
    // console.log(request.nextUrl.searchParams)
    const data = await request.json()
    console.log(data)
    return NextResponse.json(data);
}