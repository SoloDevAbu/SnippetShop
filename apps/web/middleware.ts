import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth (
    function middleware(req) {
        const token = req.nextauth.token
        const pathname = req.nextUrl.pathname

        if(pathname.startsWith('/developer')) {
            if(token?.role !== 'DEVELOPER') {
                return NextResponse.redirect(new URL('/user', req.url))
            }
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({token}) => !!token
        }
    }
)

export const config = {
    matcher: ['/developer/:path*']
}