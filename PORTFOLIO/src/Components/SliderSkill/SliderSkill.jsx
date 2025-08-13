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
    swipeToSlide: true, // enable touch swipe
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // lg screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // md screens
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // sm screens
        settings: { slidesToShow: 1 },
      },
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
      <div className="max-w-6xl mx-auto px-6  sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          My Skills
        </h2>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-center px-2 sm:px-3">
              <span className=" text-white px-10 sm:px-8 py-4 rounded-full text-sm sm:text-lg md:text-xl font-semibold  hover:scale-105 transition transform tracking-wide text-center w-full">
                {skill}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSkill;
