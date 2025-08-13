import React from "react";
import { FaReact, FaNodeJs, FaLaptopCode, FaCloud, FaDatabase } from "react-icons/fa";

const About = () => {
    return (
        <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-10">
                    <div className="flex items-center gap-6">
                        <FaReact className="text-orange-500 text-4xl" />
                        <h3 className="text-xl font-semibold">React / Frontend Development</h3>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaNodeJs className="text-orange-500 text-4xl" />
                        <h3 className="text-xl font-semibold">Express.js / Backend Development</h3>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaDatabase className="text-orange-500 text-4xl" />
                        <h3 className="text-xl font-semibold">MongoDB / SQL Database Management</h3>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaCloud className="text-orange-500 text-4xl" />
                        <h3 className="text-xl font-semibold">Hosting & Deployment</h3>
                    </div>
                    <div className="flex items-center gap-6">
                        <FaLaptopCode className="text-orange-500 text-4xl" />
                        <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        I am a fresher React and Web Developer passionate about building clean,
                        functional, and user-friendly applications. I have hands-on experience with
                        React for frontend development, Express.js for backend APIs, and working with
                        both MongoDB and SQL databases for robust data management. I have completed
                        academic projects and internships that strengthened my understanding of modern
                        UI/UX principles and full-stack application development. Additionally, I have
                        experience in deploying and hosting applications on platforms like Vercel,
                        Netlify, and cloud services. My goal is to contribute to impactful projects
                        while continuously enhancing my technical expertise and delivering high-quality
                        solutions.
                    </p>

                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-orange-500">3+</h3>
                            <p className="text-sm text-gray-400">Projects</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-orange-500">1</h3>
                            <p className="text-sm text-gray-400">Internship</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-orange-500">Fresher</h3>
                            <p className="text-sm text-gray-400">Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
