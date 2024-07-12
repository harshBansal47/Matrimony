import React from "react";
import { FaQuestionCircle, FaEnvelope, FaPhone } from "react-icons/fa";

export default function HelpAndSupport() {
  return (
    <div className="container mx-auto pt-20 p-6">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Help and Support</h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How do I create an account?</h3>
              <p className="text-gray-600">To create an account, click on the "Sign Up" button on the homepage and fill in the required details. You will receive a confirmation email to verify your account.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How can I reset my password?</h3>
              <p className="text-gray-600">If you forgot your password, click on the "Forgot Password" link on the login page and follow the instructions to reset it.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How do I update my profile information?</h3>
              <p className="text-gray-600">To update your profile information, log in to your account, go to the "Profile" section, and edit your details. Make sure to save the changes.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex items-start mb-8 md:mb-0">
              <FaEnvelope className="text-4xl text-gray-700 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email Support</h3>
                <p className="text-gray-600">You can reach our support team at <a href="mailto:support@miisco.com" className="text-blue-500 hover:underline">support@miisco.com</a> for any assistance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-4xl text-gray-700 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone Support</h3>
                <p className="text-gray-600">For immediate assistance, call us at <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 234 567 890</a>. Our support team is available 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">User Guides</h3>
              <p className="text-gray-600">Explore our comprehensive user guides to get the most out of our app. <a href="/guides" className="text-blue-500 hover:underline">View Guides</a></p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Community Forum</h3>
              <p className="text-gray-600">Join our community forum to ask questions, share tips, and connect with other users. <a href="/forum" className="text-blue-500 hover:underline">Visit Forum</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
