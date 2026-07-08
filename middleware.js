import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';



export function middleware(request) {
  // 1. كيشوف التوكن والـ Role من الكوكيز
    const token = request.cookies.get('token')?.value
    const userRole = request.cookies.get('role')?.value // يقدر يكون 'doctor' أو 'patient'
    
    const { pathname } = request.nextUrl

    // 2. يلا ما كاينش التوكن وبغا يدخل لشي صفحة محمية (ديال الدكتور أو المريض)
    if (!token) {
        if (pathname.startsWith('/doctor') || pathname.startsWith('/patient') || pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    // 3. يلا هو ديجا مسجل الدخول
    if (token) {
        // يلا بغا يدخل لصفحة login وهو ديجا داخل، كنصيفطوه على حساب الـ Role ديالو
        if (pathname === '/login' || pathname === '/register') {
        if (userRole === 'doctor') {
            return NextResponse.redirect(new URL('/doctor/dashboard', request.url))
        }
        return NextResponse.redirect(new URL('/patient/dashboard', request.url))
        }

        // 🔥 حماية مسارات الدكتور: يلا كان المريض باغي يدخل لصفحات الدكتور
        if (pathname.startsWith('/doctor') && userRole !== 'doctor') {
        return NextResponse.redirect(new URL('/patient/dashboard', request.url)) // صيفطو لصفحة المريض
        }

        // 🔥 حماية مسارات المريض: يلا كان الدكتور باغي يدخل لصفحات المريض
        if (pathname.startsWith('/patient') && userRole !== 'patient') {
        return NextResponse.redirect(new URL('/doctor/dashboard', request.url)) // صيفطو لصفحة الدكتور
        }
    }
}

// هنا كيماتشي كاع المسارات اللي بغيتي الميدلوير يخدم عليهم بلا ما يقيس الصور والملفات الثابتة
export const config = {
    matcher: ['/doctor/:path*', '/patient/:path*', '/dashboard/:path*', '/login', '/register'],
}