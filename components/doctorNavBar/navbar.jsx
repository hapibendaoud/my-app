    "use client";
    import Image from "next/image";
    import Link from "next/link";
    import TextBorderAnimation from "@/components/animata/text/text-border-animation";
    import { usePathname } from "next/navigation";
    import { useState } from "react";
    import { useDoctor } from "@/context/DoctorContext";

    export default function Navbar() {
    const pathname = usePathname();
    const { profile } = useDoctor();
    // حالة للتحكم في فتح وإغلاق قائمة الموبايل
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => pathname === path;

    // دالة لتوليد الحروف الأولى من الاسم
    const getInitials = () => {
        if (!profile?.fullName) return "Dr";
        return profile.fullName.split(" ").map(n => n[0]).join("").toUpperCase();
    };

    return (
        <>
        {/* الـ Navbar الرئيسي */}
        <div className="bg-white dark:bg-slate-900 items-center flex justify-between w-full h-20 px-4 sm:px-6 md:px-10 shadow-lg fixed top-0 z-40">
            
            {/* 1. اللوجو */}
            <div className="flex items-center cursor-pointer h-full"> 
            <Link href={"/doctor"}>
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
            <div className="hidden md:flex justify-around gap-8 h-full items-center">
            <Link href={"/doctor"}>
                <div className="cursor-pointer text-gray-700 py-7">
                <TextBorderAnimation text="Home" className={`${isActive("/doctor") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`} />
                </div>
            </Link>
            <Link href={"/doctor/profile"}>
                <div className="cursor-pointer text-gray-700 py-7">
                <TextBorderAnimation text="Profile" className={`${isActive("/doctor/profile") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`} />
                </div>
            </Link>
            <Link href={"/doctor/settings"}>
                <div className="cursor-pointer text-gray-700 py-7">
                <TextBorderAnimation text="Settings" className={`${isActive("/doctor/settings") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`} />
                </div>
            </Link>
            </div>

            {/* 3. بروفايل الطبيب + زر البرجر للموبايل */}
            <div className="flex items-center gap-3 sm:gap-5">
            {/* اسم الطبيب يظهر فقط من الشاشات المتوسطة فما فوق */}
            <div className="hidden md:block">
                <h1 className="text-gray-700 font-bold text-lg md:text-xl dark:text-white truncate max-w-45">
                Dr. {profile?.fullName || "Doctor"}
                </h1>
            </div>
            
            {/* صورة البروفايل الدائرية */}
            <Link href={"/doctor/profile"}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-tr from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-slate-950 shadow-inner shrink-0">
                {getInitials()}
                </div>
            </Link> 

            {/* زر قائمة الموبايل (يظهر فقط في الشاشات الصغيرة) */}
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
            <div className="flex flex-col p-4 space-y-3 font-semibold">
                <Link 
                href={"/doctor"} 
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-xl transition ${isActive("/doctor") ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600" : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                >
                Home
                </Link>
                <Link 
                href={"/doctor/profile"} 
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-xl transition ${isActive("/doctor/profile") ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600" : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                >
                Profile
                </Link>
                <Link 
                href={"/doctor/settings"} 
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-xl transition ${isActive("/doctor/settings") ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600" : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                >
                Settings
                </Link>
            </div>
            </div>
        )}
        </>
    );
    }