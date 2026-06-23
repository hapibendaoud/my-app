"use client";
import Image from "next/image";
import Link from "next/link";
import TextBorderAnimation from "@/components/animata/text/text-border-animation";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar(){
    const pathname = usePathname();
    const [patientInfo] = useState({
        id: "MED-9482",
        name: "Said Ait Bendaoud",
        });
    const isActive = (path) => pathname === path;
return(
    <div className="bg-white dark:bg-slate-900  items-center flex justify-between w-full h-20 px-10 shadow-lg fixed top-0 z-40">
        <div className="flex items-center justify-center cursor-pointer w-33.33% h-full pl-4 pt-0.5"> 
            <Link href={"/dashboard"}><Image src="/logo.png" alt="logo" width={200} height={200} className="w-auto h-auto"/></Link>
        </div>
        <div className=" flex justify-around gap-8 h-full items-center w-33.33%">
            <Link href={"/dashboard"}><div className="cursor-pointer text-gray-700  py-7"><TextBorderAnimation text="Home" className={`${isActive("/dashboard") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`}/></div></Link>
            <Link href={"/dashboard/about"}><div className="cursor-pointer text-gray-700 py-7"><TextBorderAnimation text="About" className={`${isActive("/dashboard/about") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`}/></div></Link>
            <Link href={"/dashboard/services"}><div className="cursor-pointer text-gray-700 py-7"><TextBorderAnimation text="Services" className={`${isActive("/dashboard/services") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`}/></div></Link>
            <Link href={"/dashboard/contact"}><div className="cursor-pointer text-gray-700 py-7"><TextBorderAnimation text="Contact" className={`${isActive("/dashboard/contact") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white"}`}  /></div></Link>
        </div>
        <div className="flex items-center gap-5 w-33.33%">
            <div>
                <h1 className="text-gray-700 font-bold text-2xl dark:text-white">{patientInfo.name}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Patient ID: {patientInfo.id}</p>
            </div>
            <Link href={"/dashboard/profile"}>
                <div className="w-14 h-14 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-xl font-bold text-slate-950 shadow-inner">
                    {patientInfo.name.split(" ").map(n => n[0]).join("")}
                </div>
            </Link>
        </div>
    </div>
)
}