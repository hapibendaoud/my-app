import Link from "next/link";
import Image from "next/image";
import TextBorderAnimation from "@/components/animata/text/text-border-animation";

export default function Footer(){
    return(
        <footer className="w-full h-fit">
            <div className="w-full h-fit grid grid-cols-2 gap-2.5 px-17 pb-5 border-t border-gray-300">
                <div className="py-10">
                    <h1
                    className="text-4xl font-bold text-blue-600 py-4"
                    >
                    Be a Part of our <span className="text-green-600">Family</span></h1>
                    <Link href={"/Login"} 
                    className="cursor-pointer text-lg text-white bg-green-600 border-green-600 border px-11 py-2 rounded-md hover:bg-green-700 "
                    >
                    Get Started
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-around py-10 ">
                    <Link href={"https://www.facebook.com/said.ait.bendaoud.2025"} target="_blank" className="flex flex-wrap items-center gap-3">
                        <Image src="/facebook.png" alt="facebook" width={30} height={30}></Image>
                        <p className="text-blue-700 font-bold text-lg">Faceb<span className="text-green-700">ook</span></p>
                    </Link>
                    <Link href={"https://www.instagram.com/hapi_bendaoud"} target="_blank" className="flex flex-wrap items-center gap-3">
                        <Image src="/instagram.png" alt="facebook" width={30} height={30}></Image>
                        <p className="text-blue-700 font-bold text-lg">Instag<span className="text-green-700">ram</span></p>
                    </Link>
                    <Link href={"https://wa.me/212658259695"} target="_blank" className="flex flex-wrap items-center gap-3">
                        <Image src="/whatsapp.png" alt="facebook" width={30} height={30}></Image>
                        <p className="text-blue-700 font-bold text-lg">Whats<span className="text-green-700">app</span></p>
                    </Link>
                </div>
            </div>
            <div className="w-full h-fit flex justify-center gap-20  items-center border-t border-gray-300 py-7">
                <Link href={"/About"}><div className="cursor-pointer text-gray-700 "><TextBorderAnimation text="About Us"/></div></Link>
                <Link href={"/Services"}><div className="cursor-pointer text-gray-700 py-1 "><TextBorderAnimation text="Terms of Services"/></div></Link>
                <Link href={"/Contact"}><div className="cursor-pointer text-gray-700 py-1 "><TextBorderAnimation text="Contact Us"/></div></Link>
            </div>
            <div className="w-full h-fit flex items-center justify-center py-10 text-sm text-gray-800 ">
                <p>© 2026 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}