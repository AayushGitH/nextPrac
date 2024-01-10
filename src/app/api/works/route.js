import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({message:'Success message for the works api'})
}