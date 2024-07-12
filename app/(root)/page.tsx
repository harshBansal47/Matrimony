"use client";
import DownloadImage from "@/public/download.png";
import Image from "next/image";
import IosImage from "@/public/ioslog.png";
import Androidlogo from "@/public/androidlogo.png";
import { BiComment, BiHeart } from "react-icons/bi";
import { FaRegIdBadge } from "react-icons/fa";
import image1 from "@/public/img1.webp";
import image2 from "@/public/img2.webp";
import image3 from "@/public/img3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  { src: "/1720735025373.png", alt: "Character Matching" },
  { src: "/1720735025392.png", alt: "Gunn Matching" },
  { src: "/1720735025409.png", alt: "Preference Matching" },
  { src: "/1720735025419.png", alt: "Match Matching" },
  { src: "/1720735025429.png", alt: "Smart Maheshwari Matrimonial App" },
];

export default function HomePage() {
  return (
    <div className="pt-[70px] min-h-screen">
      <div className="min-h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/mainbg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="min-h-screen flex flex-col items-center justify-center text-center text-white relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text shadow-lg">
            Welcome to Smart Maheshwari Matrimonial App
          </h1>
          <p className="text-lg md:text-xl mb-4 gradient-text shadow-md">
            Connecting hearts, building futures.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
            Get Started
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-center space-x-4">
              {[image1, image2, image3].map((img, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="w-24 h-24 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 border-4 rounded-xl transform rotate-6 group-hover:rotate-0 transition duration-300" style={{ borderColor: ["#3b82f6", "#ef4444", "#10b981"][index] }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 my-10  bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Find Your <span className="text-pink-500">Special</span> Someone
          </h2>
        </div>
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          {[{ icon: FaRegIdBadge, title: "Register", text: "Sign up for free and create your profile." },
          { icon: BiHeart, title: "Connect", text: "Find and connect with your matches." },
          { icon: BiComment, title: "Interact", text: "Start a conversation and build a relationship." }].map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <div className={`w-16 h-16 mb-4 flex items-center justify-center text-white rounded-full`} style={{ backgroundColor: ["#3b82f6", "#10b981", "#ef4444"][index] }}>
                <feature.icon className="w-8 h-8 font-bold" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-12">
        <header className="bg-green-500 text-white text-center py-6 mb-8">
          <h1 className="text-3xl font-bold">Our Astonshing Features</h1>
        </header>
        <section className="carousel mx-auto w-11/12 md:w-8/12">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000 }}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center w-full h-[450px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain"
                    layout="intrinsic"
                    width={800}
                    height={600}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>

      <div className="relative w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 lg:p-12 mt-12 mb-12">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(135deg, #f0f0f0 0%, #f0f0f0 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(192, 192, 192, 0.3) 1px, transparent 1px)",
            backgroundSize: "40px 100%",
            zIndex: 0,
          }}
        ></div>
        <div className="relative flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 z-10">
            Download Our App
          </h1>
          <hr className="w-24 border-b-4 border-gray-800 mb-4 z-10" />
        </div>
        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:space-x-8 z-10">
          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/2">
            <Image
              src={DownloadImage}
              alt="Download Illustration"
              className="w-full h-auto max-w-md lg:max-w-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-1/2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300"
            >
              <Image
                src={Androidlogo}
                alt="Download on Google Play"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4"
              />
              <span className="text-lg font-semibold text-gray-800">
                Download for Android
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow bg-gradient-to-r from-gray-100 to-gray-400 hover:from-gray-200 hover:to-gray-500"
            >
              <Image
                src={IosImage}
                alt="Download on the App Store"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4"
              />
              <span className="text-lg font-semibold text-gray-800">
                Download for iOS
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
