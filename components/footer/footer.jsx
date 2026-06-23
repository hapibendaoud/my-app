import Link from "next/link";
import Image from "next/image";
import TextBorderAnimation from "@/components/animata/text/text-border-animation";

export default function Footer(){
    return(
        <footer className="w-full h-fit bg-gray-100 dark:bg-slate-950">
            <div className="w-full h-fit flex justify-center gap-20  items-center border-t border-gray-300 py-7">
                <Link href={"/About"}><div className="cursor-pointer text-gray-700 dark:text-white"><TextBorderAnimation text="About Us"/></div></Link>
                <Link href={"/Services"}><div className="cursor-pointer text-gray-700 dark:text-white py-1 "><TextBorderAnimation text="Terms of Services"/></div></Link>
                <Link href={"/Contact"}><div className="cursor-pointer text-gray-700 dark:text-white py-1 "><TextBorderAnimation text="Contact Us"/></div></Link>
            </div>
            <div className="w-full h-fit flex items-center justify-center py-10 text-sm text-gray-800 dark:text-gray-400">
                <p>© 2026 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}