import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const userId = params.userid
    const postId = params.postid
    const name = request.nextUrl.searchParams.get('name')
    const city = request.nextUrl.searchParams.get('city')
    // console.log(typeof(obj))
    console.log('The name and the city is - ', name, city)
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