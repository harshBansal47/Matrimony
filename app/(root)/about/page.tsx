import Image from "next/image";
import MiiscoImage from "@/public/matchmaking.webp";
import avatar from "@/public/avatar.webp";
import { FaDiagramSuccessor, FaLinkedinIn } from "react-icons/fa6";
import teams from "@/app/utilities/team";
import { SiMarriott } from "react-icons/si";

export default function AboutUs() {
    return (
        <>
            <div className="flex flex-col justify-center pt-16">
                <div className="text-center mb-16 banner h-52 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-100">About Us</h1>
                </div>
            </div>

            <div className="flex flex-col items-center mb-16 rounded-xl bg-gradient-to-r from-blue-400 to-purple-600 p-10 mx-10 shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-6">Who We Are</h1>
                <div className="w-full p-4 flex justify-center lg:justify-start">
                    <h1 className="font-extrabold text-5xl text-white">MIISCOLLP</h1>
                </div>
                <div className="w-full flex justify-center my-4">
                    <hr className="w-1/2 border-t-4 border-white" />
                </div>
                <div className="w-full px-10 text-center lg:text-left">
                    <p className="text-lg text-white leading-relaxed">
                        We are MiiscoLLP, a service-based company from Goverdhan, Mathura, UP. We have a wide domain expertise in QA automation testing, app development, AI/ML, and more. Our team is dedicated to delivering innovative solutions and creating a positive impact in our community through our work and dedication.
                    </p>
                </div>
            </div>

            <div className="min-h-screen flex flex-wrap items-center mb-16 bg-gray-100 p-10">
                <div className="w-full md:w-1/2 flex justify-center p-4">
                    <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                        <Image
                            src={MiiscoImage}
                            alt="miisco"
                            aria-label="miisco"
                            width={320}
                            height={320}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4 text-gray-800">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-wide flex items-center">
                        <SiMarriott className="w-10 h-10 mr-4" />
                        Why Us
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 flex items-center">
                        <FaDiagramSuccessor className="w-6 h-6 mr-2" />
                        With the growing demand for finding Maheshwari couples, we have decided to make it easier by developing a matchmaking app to help you reach the right match that you desire. Our unique approach combines technical expertise with a deep understanding of our clients' needs, ensuring top-notch services that drive growth and success.
                    </p>
                </div>
            </div>

            <div className="text-center mb-16 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Team</h1>
                <hr className="w-1/2 border-t-4 border-gray-300 mb-8" />
                <div className="flex flex-wrap justify-center">
                    {teams[0].employees.map((member, index) => (
                        <div
                            key={index}
                            className="w-60 h-64 m-4 relative overflow-hidden border border-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-500 p-1 group"
                        >
                            <div className="w-full h-2/3 bg-gray-600">
                                <Image src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-t-lg" />
                            </div>
                            <div className="bg-gray-800 flex flex-col items-center rounded-b-lg p-2 relative">
                                <h2 className="text-md font-semibold text-white">{member.name}</h2>
                                <p className="text-white">{member.position}</p>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-2 flex items-center justify-center shadow-lg"
                                >
                                    <FaLinkedinIn size={20} />
                                    <span className="ml-2">LinkedIn</span>
                                </a>
                                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center mb-16 rounded-xl bg-gradient-to-r from-gray-800 to-teal-600 p-10 mx-10 shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-6">Our Values</h1>
                <div className="w-full flex flex-wrap justify-center">
                    <div className="w-full md:w-1/3 p-4">
                        <div className="p-6 bg-white rounded-lg shadow-md h-full">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Innovation</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in constantly pushing the boundaries of what is possible, using cutting-edge technology to deliver innovative solutions that make a real difference.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="p-6 bg-white rounded-lg shadow-md h-full">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Integrity</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our commitment to integrity means we always do what is right, ensuring our clients can trust us to deliver on our promises and act with honesty and transparency.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="p-6 bg-white rounded-lg shadow-md h-full">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Community</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are dedicated to making a positive impact in our community, supporting local initiatives and working together to create a better future for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    );
}
