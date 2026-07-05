    "use client";
    import Image from "next/image";
    import Link from "next/link";
    import TextBorderAnimation from "@/components/animata/text/text-border-animation";
    import { usePathname } from "next/navigation";
    import { useState } from "react";

    export default function Navbar() {
    const pathname = usePathname();
    // حالة التحكم في القائمة الجانبية للموبايل
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => pathname === path;

    return (
        <>
        {/* الـ Navbar الرئيسي */}
        <div className="bg-white dark:bg-slate-900 items-center flex justify-between w-full h-20 px-4 sm:px-6 md:px-10 shadow-lg fixed top-0 z-40">
            
            {/* 1. اللوجو */}
            <div className="flex items-center cursor-pointer h-full"> 
            <Link href={"/"}>
                <Image 
                src="/logo.png" 
                alt="logo" 
                width={160} 
                height={160} 
                priority 
                className="w-32 sm:w-40 h-auto"
                style={{ width: 'auto', height: 'auto' }}
                />
            </Link>
            </div>

            {/* 2. القائمة للشاشات الكبيرة (تختفي في الموبايل) */}
            <div className="hidden md:flex justify-around gap-6 lg:gap-8 h-full items-center">
            <Link href={"/"}>
                <div className="cursor-pointer text-gray-700 py-7">
                <TextBorderAnimation text="Home" className={`${isActive("/") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`} />
                </div>
            </Link>
            <Link href={"/about"}>
                <div className="cursor-pointer text-gray-700 py-7">
                <TextBorderAnimation text="About" className={`${isActive("/about") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`} />
                </div>
            </Link>
            <Link href={"/services"}>
                <div className="cursor-pointer text-gray-700 py-7">
                <TextBorderAnimation text="Services" className={`${isActive("/services") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`} />
                </div>
            </Link>
            <Link href={"/contact"}>
                <div className="cursor-pointer text-gray-700 py-7">
                <TextBorderAnimation text="Contact" className={`${isActive("/contact") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`} />
                </div>
            </Link>
            </div>

            {/* 3. أزرار الدخول والتسجيل للشاشات الكبيرة + زر البرجر للموبايل */}
            <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
                <Link href={"/login"} className="cursor-pointer text-blue-600 border border-blue-600/30 px-6 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-200">
                Login
                </Link>
                <Link href={"/register"} className="cursor-pointer text-white bg-green-600 border border-green-600 px-6 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transition duration-200">
                Register
                </Link>
            </div>

            {/* زر البرجر للموبايل */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-700 dark:text-white focus:outline-none"
                aria-label="Toggle Menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
                </svg>
            </button>
            </div>
        </div>

        {/* قائمة الموبايل المنسدلة (Mobile Menu Drawer) */}
        {isOpen && (
            <div className="fixed inset-x-0 top-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-xl md:hidden z-30 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col p-4 space-y-2 font-semibold text-sm">
                <Link 
                href={"/"} 
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-xl transition ${isActive("/") ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600" : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                >
                Home
                </Link>
                <Link 
                href={"/about"} 
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-xl transition ${isActive("/about") ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600" : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                >
                About
                </Link>
                <Link 
                href={"/services"} 
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-xl transition ${isActive("/services") ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600" : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                >
                Services
                </Link>
                <Link 
                href={"/contact"} 
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-xl transition ${isActive("/contact") ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600" : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                >
                Contact
                </Link>
                
                {/* أزرار الحساب داخل قائمة الموبايل */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-slate-800/80">
                <Link 
                    href={"/login"} 
                    onClick={() => setIsOpen(false)}
                    className="text-center text-blue-600 border border-blue-600/30 py-2.5 rounded-xl font-bold hover:bg-blue-50 dark:hover:bg-blue-950/20 transition"
                >
                    Login
                </Link>
                <Link 
                    href={"/register"} 
                    onClick={() => setIsOpen(false)}
                    className="text-center text-white bg-green-600 py-2.5 rounded-xl font-bold hover:bg-green-700 transition"
                >
                    Register
                </Link>
                </div>
            </div>
            </div>
        )}
        </>
    );
    }