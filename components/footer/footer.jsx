import Link from "next/link";
import Image from "next/image";
import TextBorderAnimation from "@/components/animata/text/text-border-animation";

export default function Footer(){
    return(
        <footer className="w-full h-fit bg-gray-100 dark:bg-slate-950 px-4 sm:px-6 md:px-10">
            {/* روابط الفوتر: عمودية في الموبايل وأفقية في الشاشات الكبيرة */}
            <div className="w-full h-fit flex flex-col md:flex-row justify-center gap-6 md:gap-20 items-center border-t border-gray-300 dark:border-slate-800 py-6 text-center">
                <Link href={"/About"}>
                    <div className="cursor-pointer text-gray-700 dark:text-white text-sm sm:text-base">
                        <TextBorderAnimation text="About Us"/>
                    </div>
                </Link>
                <Link href={"/Services"}>
                    <div className="cursor-pointer text-gray-700 dark:text-white py-1 text-sm sm:text-base">
                        <TextBorderAnimation text="Terms of Services"/>
                    </div>
                </Link>
                <Link href={"/Contact"}>
                    <div className="cursor-pointer text-gray-700 dark:text-white py-1 text-sm sm:text-base">
                        <TextBorderAnimation text="Contact Us"/>
                    </div>
                </Link>
            </div>
            
            {/* حقوق النشر */}
            <div className="w-full h-fit flex items-center justify-center py-6 md:py-10 text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center border-t border-gray-200/50 dark:border-slate-900">
                <p>© 2026 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}