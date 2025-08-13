import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloudUploadAlt,
  FaCreditCard,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiRender,
  SiTailwindcss,
  SiBootstrap,
  SiRazorpay,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-black text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
  { name: "SQL Server", icon: <FaDatabase className="text-red-600 text-4xl" /> }, 
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500 text-4xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-4xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-black text-4xl" /> },
  { name: "Render", icon: <SiRender className="text-purple-400 text-4xl" /> },
  { name: "Razorpay", icon: <SiRazorpay className="text-indigo-500 text-4xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 text-4xl" /> },
  { name: "Database", icon: <FaDatabase className="text-yellow-500 text-4xl" /> },
  { name: "Hosting", icon: <FaCloudUploadAlt className="text-purple-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white text-gray-900 rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="rounded-full bg-gray-100 p-5 flex items-center justify-center shadow-inner">
              {skill.icon}
            </div>
            <p className="mt-3 font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
