// import React from "react";
// import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

// const Contact = () => {
//     return (
//         <div className="bg-black text-white py-20" id="about">
//             <div className="container mx-auto px-8 md:px-16 lg:px-24">
//                 <h2 className="text-4xl font-bold text-center mb-12">Contact me</h2>
//                 <div className="flex flex-col md:flex-row items-center md:space-x-12"></div>
//                 <div className="flex-1">
//                     <h3>Let's Talk</h3>
//                     <p>
//                         I'm open to discussing web development Projects or Partnership
//                         opportunities.
//                     </p>
//                     <div className="mb-4 mt-8">
//                         <FaEnvelope className="inline-block text-green-400 mr-2" />
//                         <a href="mailto:maheshganesh43@gmail.com"
//                             className="hover:underline">
//                             maheshganesh43@gmail.com
//                         </a>
//                     </div>

//                     <div className="mb-4">
//                         <FaPhone className="inline-block text-green-400 mr-2" />
//                         <span>9944455644</span>
//                     </div>

//                     <div className="mb-4">
//                         <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
//                         <span>Cheranma Nagar, CBE-35</span>
//                     </div>
//                 </div>
//                 <div className="flex-1">
//                     <form className="space-y-4">
//                         <div>
//                             <label htmlFor="name" className="block mb-2">Your name</label>
//                             <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400" placeholder="Enter your Name" />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block mb-2">Your Emailid</label>
//                             <input type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400" placeholder="Enter your Email-id" />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block mb-2">Message</label>
//                             <textarea type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400" rows="5" placeholder="Enter your Email-id" />
//                         </div>
//                         <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//                 transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
//                             Send
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;




import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        {/* Flex container for left and right sections */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 items-start">
          {/* Left Section: Contact Information */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="mb-8">
              I'm open to discussing web development projects or partnership opportunities.
            </p>

            <div className="mb-4">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:maheshganesh43@gmail.com"
                className="hover:underline"
              >
                maheshganesh43@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>9944455644</span>
            </div>

            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Cheranma Nagar, CBE-35</span>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="flex-1">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-12 py-3 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
