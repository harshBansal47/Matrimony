import Image from "next/image";
import MiiscoImage from "@/public/matchmaking.webp";
import avatar from "@/public/avatar.webp";
import { FaLinkedinIn } from "react-icons/fa6";

export default function AboutUs() {
    const teamMembers = [
        { name: "John Doe", position: "CEO", linkedin: "https://linkedin.com/in/johndoe", image: avatar },
        // Add more team members here
      ];
    return (
        <>
            <div className="flex flex-col justify-center pt-16">
                <div className="text-center mb-16 banner h-52 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-gray-100">About Us</h1>
                </div>
            </div>

            <div className="flex flex-col items-center mb-16 rounded-xl bg-gradient-to-r from-blue-400 to-purple-600 p-10 mx-10 shadow-lg">
  <h1 className="text-4xl font-bold text-white mb-6">Who We Are</h1>
  <div className="w-full p-4">
    <h1 className="font-extrabold text-5xl text-center lg:text-left text-white">MIISCOLLP</h1>
  </div>
  <div className="w-full flex justify-center my-4">
    <hr className="w-1/2 border-t-4 border-white" />
  </div>
  <div className="w-full px-10 text-center lg:text-left">
    <p className="text-lg text-white leading-relaxed">
      We are MiiscoLLP, a service-based company from Goverdhan, Mathura, UP. We have a wide domain expertise in QA automation testing, app development, AI/ML, and more. Our team is dedicated to delivering innovative solutions and creating a positive impact in our community through our work and dedication.
    </p>
  </div>
  <div className="w-full mt-6 flex justify-center">
    
  </div>
</div>


<div className="min-h-screen flex flex-wrap items-center mb-16 bg-gradient-to-r from-red-400 to-red-500 p-10">
  <div className="w-full md:w-1/2 flex justify-center p-4">
    <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
      <Image src={MiiscoImage} alt="miisco" aria-label="miisco" width={320} height={320} className="object-cover" />
    </div>
  </div>
  <div className="w-full md:w-1/2 p-4 text-white">
    <h1 className="text-4xl font-extrabold mb-6">Why Us</h1>
    <p className="text-lg leading-relaxed">
      With the growing demand for finding Maheshwari couples, we have decided to make it easier by developing a matchmaking app to help you reach the right match that you desire. Our unique approach combines technical expertise with a deep understanding of our clients' needs, ensuring top-notch services that drive growth and success.
    </p>
  </div>
</div>


<div className="text-center mb-16 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Team</h1>
      <hr className="w-1/2 border-t-4 border-gray-300 mb-8" />
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-48 h-64 m-4 relative overflow-hidden border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-full h-2/3 bg-gray-300">
              <Image src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className=" bg-white flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
              <p className="text-gray-600">{member.position}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 hover:text-blue-500 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

        </>
    );
}
