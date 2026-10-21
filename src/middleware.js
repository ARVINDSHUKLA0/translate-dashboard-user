// import { NextResponse } from 'next/server'

// export function middleware(request) {

//     const { pathname } = request.nextUrl

//     const auth = request.cookies.get('admin-auth')?.value

//     if (pathname === '/login') { 
//         if (auth === '1') {
//             return NextResponse.redirect(
//                 new URL('/', request.url)
//             )
//         }

//         return NextResponse.next()
//     }

 
//     if (pathname === '/forgot-password') {
//         return NextResponse.next()
//     }


//     if (auth !== '1') {
//         return NextResponse.redirect(
//             new URL('/login', request.url)
//         )
//     }


//     return NextResponse.next()
// }


// export const config = {
//     matcher: [
//         '/((?!_next/static|_next/image|favicon.ico).*)',
//     ],
// }


import { NextResponse } from 'next/server'

// Login happens on the CLIENT site (translator tab). This app has no
// login page of its own.
const CLIENT_URL = (
    process.env.NEXT_PUBLIC_CLIENT_URL || 'http://localhost:3001'
).replace(/\/+$/, '')

const CLIENT_LOGIN = `${CLIENT_URL}/login?type=translator`

export function middleware(request) {
    const { pathname } = request.nextUrl

    const auth = request.cookies.get('translator-session')?.value

    if (pathname === '/login') {
        return NextResponse.redirect(
            auth === '1' ? new URL('/translator-dashboard', CLIENT_URL) : CLIENT_LOGIN
        )
    }

    if (pathname === '/forgot-password') {
        return NextResponse.next()
    }

    if (auth !== '1') {
        return NextResponse.redirect(CLIENT_LOGIN)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/((?!_next/static|_next/image|favicon.ico|api).*)',
    ],
}
