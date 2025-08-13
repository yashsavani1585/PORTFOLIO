import React from "react";
import profileImage from "../../assets/profileImage.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white flex items-center justify-center px-6 md:px-20 py-20 md:py-32 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-xl md:text-2xl text-orange-500 font-medium">
            Hello<span className="text-orange-400">.</span>
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I'm Yash Savani
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-white">
            <span className="text-orange-400">
              <Typewriter
                words={[
                  "Software Developer",
                  "Web Developer",
                  "MERN Developer",
                  "SQL Developer",
                  "Full Stack Developer",
                ]}
                loop={0} 
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">


            <a
              href="https://drive.google.com/uc?export=download&id=1lA7e-gXYCrcOKbNH1j7Oz_-FYXJJQF4H"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300 transform hover:scale-105 inline-block"
            >
              My Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <img
              src={profileImage}
              alt="Yash"
              className="w-full h-full object-cover rounded-full border-4 border-gray-900 shadow-[0_0_50px_rgba(255,165,0,0.9)] transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(255,165,0,0.5)] animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
