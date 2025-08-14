import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSkill = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280, 
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, 
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint:320,
        settings:{ slidesToShow: 1 },
      }
    ],
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React",
    "Git",
    "GitHub",
    "SQL",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
  ];

  return (
    <div className="bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
          My Skills
        </h2>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-center">
              <div className=" text-white rounded-full px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-semibold flex items-center justify-center w-full transition-transform transform hover:scale-105">
                {skill}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSkill;
