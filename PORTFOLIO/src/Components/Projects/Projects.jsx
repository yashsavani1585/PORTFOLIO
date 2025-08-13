import React from "react";
import {
  FaReact,
  FaDatabase,
  FaCloudUploadAlt,
  FaCreditCard,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiVercel,
  SiRender,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

// Imported images
import BLOG from "../../assets/BLOAG-APP.png";
import ecommerce from "../../assets/E-COMMERCE.png";
import elms from "../../assets/E-LMS.png";

const projects = [
  {
    title: "E-Learning Platform",
    description:
      "A full-stack platform for delivering online courses. Built with React, Express.js, and MongoDB, featuring secure authentication, course management, and Razorpay payment integration. Frontend hosted on Vercel and backend deployed on Render.",
    tech: ["React", "Express.js", "MongoDB", "Razorpay", "Vercel", "Render"],
    image: elms,
    liveLink: "https://e-lms-delta.vercel.app/",
    github: "https://github.com/yashsavani1585/E-LMS",
  },
  {
    title: "Blog Application",
    description:
      "A MERN stack blog platform with user and admin panels. Includes authentication, post creation, editing, and management. Frontend built with React and hosted on Vercel. Backend built with Express.js and MongoDB, hosted on Render.",
    tech: ["React", "Express.js", "MongoDB", "Vercel", "Render"],
    image: BLOG,
    liveLink: "https://blog-ys.onrender.com/",
    github: "https://github.com/yashsavani1585/BlogApp",
  },
  {
    title: "E-commerce Platform",
    description:
      "An e-commerce platform built with React for the frontend and Firebase for backend services, including authentication, database, and hosting. Features product listing, cart system, and secure checkout. Frontend deployed on Vercel.",
    tech: ["React", "Firebase", "Vercel"],
    image: ecommerce,
    liveLink: "https://ecoommerce.vercel.app/",
    github: "https://github.com/yashsavani1585/ecoommerce",
  },
];

const techIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Express.js": <SiExpress className="text-black text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  SQL: <FaDatabase className="text-yellow-500 text-2xl" />,
  Hosting: <FaCloudUploadAlt className="text-purple-500 text-2xl" />,
  Razorpay: <FaCreditCard className="text-indigo-500 text-2xl" />,
  Firebase: <SiFirebase className="text-yellow-400 text-2xl" />,
  Vercel: <SiVercel className="text-black text-2xl" />,
  Render: <SiRender className="text-purple-400 text-2xl" />,
};

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">
                {project.description}
              </p>
              {/* Tech Icons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} title={tech}>
                    {techIcons[tech]}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-300"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
