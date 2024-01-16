import { NextResponse } from "next/server"

export const getErrorResponse = (message, status, statusText) => {
    return NextResponse.json({
        message: message
    },{
        status: status,
        statusText: statusText
    })
}