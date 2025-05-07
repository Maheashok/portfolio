import React from "react";
import eimage from '../assets/eimage.png'; // Import the image
import chatimage from '../assets/chatimage.png';
import library from '../assets/library.png';

const projectsData = [
  {
    id: 1,
    name: "E-commerce Website",
    technologies: "MERN stack",
    description: "An e-commerce platform for online shopping with user authentication, product browsing, and a secure payment system.",
    image: eimage,
  },
  {
    id: 2,
    name: "Chat Web App",
    technologies: "React, Firebase",
    description: "A real-time chat application that allows users to send messages and images instantly using Firebase as the backend.",
    image:chatimage, 
  },
  {
    id: 3,
    name: "Library Management System",
    technologies: "java, springboot",
    description: "A web-based system to manage library resources efficiently, including book lending and member management.",
    image:library
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-40 bg-gray-700 rounded-md mb-4">
                {/* Image or Placeholder */}
                {project.image ? (
                  <img
                    src={project.image} // Use the correct image property
                    alt={project.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.technologies}</p>
              <p className="text-gray-300 text-sm mt-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
