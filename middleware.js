import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('token')?.value;
    const userRole = request.cookies.get('role')?.value;
    
    const { pathname } = request.nextUrl;

    // 1. إذا لم يكن هناك توكن
    if (!token) {
        if (pathname.startsWith('/doctor') || pathname === '/dashboard') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // 2. إذا كان هناك توكن
    if (token) {
        // حماية ضد التلاعب بالـ role في المتصفح
        if (userRole !== 'doctor' && userRole !== 'patient') {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('token');
            response.cookies.delete('role');
            return response;
        }

        // إذا حاول الدخول للصفحات العامة وهو مسجل
        if (pathname === '/' || pathname === '/login' || pathname === '/register') {
            return NextResponse.redirect(
                new URL(userRole === 'doctor' ? '/doctor' : '/dashboard', request.url)
            );
        }

        // منع الدكتور من دخول /dashboard الخاصة بالمريض
        if (pathname === '/dashboard' && userRole === 'doctor') {
            return NextResponse.redirect(new URL('/doctor', request.url));
        }

        // منع المريض من دخول مسارات الدكتور
        if (pathname.startsWith('/doctor') && userRole !== 'doctor') {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/doctor/:path*', '/dashboard', '/login', '/register'],
};