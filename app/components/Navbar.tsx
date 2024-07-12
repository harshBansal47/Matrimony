"use client"
import { useState } from "react";
import { lato, montserrat, openSans } from "../utilities/fonts";
import { GiHamburgerMenu ,GiTireIronCross} from "react-icons/gi";


export default function Navbar() {
  const [expand,setExpand] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 z-50 w-full bg-red-50">
      <div className="py-5 px-10 lg:px-15 flex justify-between items-center">
        <h1 className={`font-black italic text-lg ${openSans.className} text-[#D81B60]`}>
          Maheshwari Matrimonials
        </h1>
        <div>
          <ul className="hidden lg:flex lg:gap-6">
            <li><a href="/" className="text-sm text-[#333333] hover:text-[#bf65ad]">Home</a></li>
            <li><a href="/about" className="text-sm text-[#333333] hover:text-[#bf65ad]">About</a></li>
            <li><a href="/contact" className="text-sm text-[#333333] hover:text-[#bf65ad]">Contact</a></li>
            <li><a href="/blogs" className="text-sm text-[#333333] hover:text-[#bf65ad]">Blogs</a></li>
          </ul>
          {
            expand?(<GiTireIronCross className="h-10 w-10 font-bold text-pink-600 hover:text-red-300 lg:hidden" onClick={ ()=>setExpand(false)}/>):
           ( <GiHamburgerMenu className="h-10 w-10 font-bold text-pink-600 hover:text-red-300 lg:hidden rounded" onClick={()=>setExpand(true)}/>)
          }
        </div>
      </div>
      <hr className=" border-[#E0E0E0] mx-auto " />
      <div className={`lg:hidden ${expand?"block":"hidden"} bg-inherit`}>
        <ul className="flex flex-col gap-4 p-4 justify-center items-center">
          <li><a href="/" className={`text-lg text-[#333333] hover:text-[#bf65ad] ${openSans.className} font-bold text-pink-700`}>Home</a></li>
            <li><a href="/about" className={`text-lg text-[#333333] hover:text-[#bf65ad] ${openSans.className} font-bold text-pink-700`}>About</a></li>
            <li><a href="/contact" className={`text-lg text-[#333333] hover:text-[#bf65ad] ${openSans.className} font-bold text-pink-700`}>Contact</a></li>
            <li><a href="/blogs" className={`text-lg text-[#333333] hover:text-[#bf65ad] ${openSans.className} font-bold text-pink-700`}>Blogs</a></li>
        </ul>
      </div>
    </nav>
  );
}