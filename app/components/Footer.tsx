import Divider from "./Divider";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoLogoApple } from "react-icons/io5";
import { BsAndroid2 } from "react-icons/bs";
import { lato, montserrat, openSans } from "../utilities/fonts";

export default function Footer() {
  return (
    <footer className="bg-[#F8EAF0] text-gray-900 py-10 px-10 lg:px-20 pt-40">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-left mb-10 lg:mb-0 pl-4">
          <h1 className={`font-black italic text-lg ${openSans.className} text-[#D81B60]`}>
            Maheshwari Matrimonials
          </h1>
          <p className="text-sm leading-relaxed text-[#333333]">
            Welcome to Maheshwari Matrimony, your trusted app for finding the perfect match within the Maheshwari community. Our advanced features help you connect based on character, preferences, income, and more, ensuring meaningful and compatible matches. Join us today and start your journey towards a happy and harmonious partnership.
          </p>
          <p className={`text-sm ${montserrat.className} font-semibold text-[#555555]`}>
            Office Address: Tulsi Residency, in front of Siya Ram Baba ashram, Goverdhan, UP
          </p>

          <hr className="my-10 border-[#E0E0E0]" />
        </div>
        <div className="w-full lg:w-1/4 mb-5 lg:mb-0 text-center">
          <h1 className="font-bold mb-3 text-lg text-[#D81B60]">Company</h1>
          <hr className="my-1 border-[#E0E0E0] w-8/12 mx-auto" />
          <ul>
            <li className="mb-2"><a href="/about" className="text-sm text-[#333333] hover:text-[#AD1457]">About Us</a></li>
            <li className="mb-2"><a href="/contact" className="text-sm text-[#333333] hover:text-[#AD1457]">Contact Us</a></li>
            <li className="mb-2"><a href="/careers" className="text-sm text-[#333333] hover:text-[#AD1457]">Career</a></li>
            <li className="mb-2"><a href="/blogs" className="text-sm text-[#333333] hover:text-[#AD1457]">Blogs</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 text-center">
          <h1 className="font-bold mb-3 text-lg text-[#D81B60]">Legal</h1>
          <hr className="my-1 border-[#E0E0E0] w-8/12 mx-auto" />
          <ul>
            <li className="mb-2"><a href="/terms/termsandconditions" className="text-sm text-[#333333] hover:text-[#AD1457]">Terms & Conditions</a></li>
            <li className="mb-2"><a href="/terms/privacy" className="text-sm text-[#333333] hover:text-[#AD1457]">Privacy Policy</a></li>
            <li className="mb-2"><a href="/terms/termofuse" className="text-sm text-[#333333] hover:text-[#AD1457]">Terms of Use</a></li>
            <li className="mb-2"><a href="/terms/help" className="text-sm text-[#333333] hover:text-[#AD1457]">Help & Support</a></li>
          </ul>
        </div>
      </div>
      <hr className="my-10 border-[#E0E0E0]" />
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center lg:items-center py-5">
        <p className={`text-lg font-black ${lato.className} mb-5 lg:mb-0 text-[#333333]`}>
          Download app for
        </p>
        <div className="flex items-center justify-center gap-5">
          <a href="https://www.android.com/" aria-label="android" className="flex border-2 rounded px-4 py-3 hover:bg-[#FF9ECF] hover:border-[#AD1457] border-[#D81B60]">
            <BsAndroid2 size={30} className="text-[#D81B60] hover:text-[#AD1457] mr-3" />
            <p className="text-sm text-[#333333]">Android</p>
          </a>
          <a href="https://www.ios.com/" aria-label="ios" className="flex items-center border-2 rounded px-4 py-3 hover:bg-[#FF9ECF] hover:border-[#AD1457] border-[#D81B60]">
            <IoLogoApple size={30} className="text-[#D81B60] hover:text-[#AD1457] mr-3" />
            <p className="text-sm text-[#333333]">iOS</p>
          </a>
        </div>
      </div>
      <hr className="my-10 border-[#E0E0E0]" />
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center py-5">
        <p className="text-sm text-[#555555] mb-5 lg:mb-0">© 2024 All Rights Reserved</p>
        <div className="flex items-center justify-center gap-5">
          <a href="https://www.twitter.com/" aria-label="Twitter" className="mx-2">
            <FaTwitter size={30} className="text-[#D81B60] hover:text-[#AD1457]" />
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="mx-2">
            <FaLinkedin size={30} className="text-[#D81B60] hover:text-[#AD1457]" />
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram" className="mx-2">
            <FaInstagram size={30} className="text-[#D81B60] hover:text-[#AD1457]" />
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook" className="mx-2">
            <FaFacebook size={30} className="text-[#D81B60] hover:text-[#AD1457]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
