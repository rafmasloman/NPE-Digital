import React from "react";
import Card from "../../components/Card/card";

const index = () => {
  return (
    <div className="services container mx-auto grid grid-cols-1 md:grid-cols-12 mt-17.5 md:mt-37.5">
      <div className="md:col-span-12 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h3 className=" font-primary font-medium md:text-xl">Our Services</h3>
          <span className="w-20 bg-black h-0.9 mt-2"></span>
        </div>
        <h1 className="font-primary md:w-2/6 text-center mt-2.5 font-bold text-blue-secondary text-2.5xl md:text-5xl md:mt-7.5">
          Layanan dengan Kualitas{" "}
          <span className="font-primary text-blue-primary">terbaik</span>
        </h1>
        {/* <p className="text-gray-text text-center mt-2.5 font-secondary text-xs w-8/12  md:text-lg md:mt-7.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p> */}
      </div>
      <div className="grid col-span-12 gap-5 justify-self-center">
        <Card />
      </div>
    </div>
  );
};

export default index;
