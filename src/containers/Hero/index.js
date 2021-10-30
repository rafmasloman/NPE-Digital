import React from "react";
import HeroImage from "../../assets/images/hero image.png";
import HeroImageMobile from "../../assets/images/hero image mobile.jpg";
import Button from "../../components/Button";
const Hero = () => {
  return (
    <div className="hero container mx-auto mt-12.5 md:mt-24 md:flex md:px-40">
      <div className="flex flex-col justify-center">
        <h1 className="font-primary font-bold text-blue-secondary text-2.5xl md:text-5xl ">
          Bangun{" "}
          <span className="font-primary text-blue-primary">Produk Digital</span>{" "}
          anda bersama kami
        </h1>
        <p className="text-gray-text font-secondary  text-xs mt-2.5 md:w-9/12 md:text-lg md:mt-7.5 ">
          Kami menyediakan jasa pembuatan website, aplikasi, Design dan lainnya
          yang memiliki kualitas terbaik sehingga dapat menunjang produk digital
          anda
        </p>
        <div className="flex justify-center mt-12.5 md:justify-start">
          <Button name="Get Started" btnType="button" />
        </div>
      </div>

      {/* //todo Image ketika responsive nya > 375px */}
      <div className="hidden w-full md:grid md:justify-items-end ">
        <img src={HeroImage} alt="TeamWorkPicture" className="" />
      </div>
      {/* //todo Image ketika responsive nya <= 375px (versi mobile) */}
      <div className="block mt-12.5  md:hidden">
        <img
          src={HeroImageMobile}
          alt="TeamWorkPicture"
          className="rounded-2.5xl"
        />
      </div>
    </div>
  );
};

export default Hero;
