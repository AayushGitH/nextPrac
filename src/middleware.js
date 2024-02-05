import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('Middleware is called')
    const authToken = request.cookies.get('authToken')?.value
    console.log('Token under middleware file is ', authToken)

    const loggedInUserNotAccessPaths = request.nextUrl.pathname === '/login' ||
        request.nextUrl.pathname === '/signup'

    if(request.nextUrl.pathname === '/api/login') {
        return;
    }

    if(loggedInUserNotAccessPaths) {
        // Accessing public urls
        if(authToken){
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    } else {
        // Accessing private urls
        if(!authToken) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/add-task',
        '/profile/:path*',
        '/show-task',
        '/api/:path*'
    ],
}