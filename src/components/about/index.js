import React from "react";
import AboutImageMobile from "../../assets/images/about-image-mobile.jpg";
import AboutImage from "../../assets/images/about-image.png";
const About = () => {
  return (
    <div className="container mx-auto mt-12.5 md:grid md:grid-cols-2 ">
      {/* //todo Image ketika responsive nya > 375px */}
      <div className="hidden md:grid w-full">
        <img src={AboutImage} alt="TeamWorkPicture" className="" />
      </div>
      <div className="flex flex-col justify-center  md:ml-20">
        <div className="flex items-end">
          <h3 className=" font-primary font-medium ">About Us</h3>
          <span className="w-20 bg-black h-0.9 ml-2"></span>
        </div>
        <h1 className="font-primary mt-2.5 font-bold text-blue-secondary text-2.5xl md:text-5xl md:mt-7.5">
          Apa itu{" "}
          <span className="font-primary text-blue-primary">NPE Digital?</span>
        </h1>
        <p className="text-gray-text mt-2.5 font-secondary text-xs w-10/12  md:text-lg md:mt-7.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor, purus sit amet luctus venenatis, lectus magna fringilla
          urna, porttitor, purus sit amet luctus venenatis, lectus magna
          fringilla urna, porttitor
        </p>
      </div>

      {/* //todo Image ketika responsive nya <= 375px (versi mobile) */}
      <div className="block mt-12.5 md:hidden">
        <img src={AboutImageMobile} alt="About" className="rounded-2.5xl" />
      </div>
    </div>
  );
};

export default About;
