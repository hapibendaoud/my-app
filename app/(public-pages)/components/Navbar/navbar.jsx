import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
return(
    <div className="bg-white items-center flex justify-between w-full h-20 px-10 shadow-lg fixed top-0 z-40">
        <div className="flex items-center justify-center cursor-pointer w-33.33% h-full pl-4 pt-0.5"> 
            <Link href={"/"}><Image src="/logo.png" alt="logo" width={230} height={200}/></Link>
        </div>
        <div className=" flex justify-around gap-8 h-full items-center w-33.33%">
            <Link href={"/"}><div className="cursor-pointer text-gray-700 py-7">Home</div></Link>
            <Link href={"/About"}><div className="cursor-pointer text-gray-700 py-7">About</div></Link>
            <Link href={"/Services"}><div className="cursor-pointer text-gray-700 py-7">Services</div></Link>
            <Link href={"/Contact"}><div className="cursor-pointer text-gray-700 py-7">Contact</div></Link>
        </div>
        <div className="flex gap-2 w-33.33% ">
            <Link href={"/Login"} className="cursor-pointer text-blue-600 border px-8 py-1 rounded-md hover:bg-blue-900 hover:text-white">Login</Link>
            <Link href={"/Rejister"} className="cursor-pointer text-white bg-green-600 border-green-600 border px-7 py-1 rounded-md hover:bg-green-700">Register</Link>
        </div>
    </div>
)
}