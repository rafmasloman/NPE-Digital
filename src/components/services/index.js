import React from "react";
import WebService from "../../assets/images/website.png";
import Card from "../services/card";
const services = () => {
  const data = [
    {
      name: "Website",
      img: { WebService },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam consectetur ",
    },
    {
      name: "",
    },
  ];
  return data;
};
const index = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-12.5 md:mt-20">
      <div className="md:col-start-1 md:col-end-6">
        <div className="flex items-end">
          <h3 className=" font-primary font-medium md:text-xl">Our Services</h3>
          <span className="w-20 bg-black h-0.9 ml-2"></span>
        </div>
        <h1 className="font-primary mt-2.5 font-bold text-blue-secondary text-2.5xl md:text-5xl md:mt-7.5">
          Layanan dengan Kualitas{" "}
          <span className="font-primary text-blue-primary">terbaik</span>
        </h1>
        <p className="text-gray-text mt-2.5 font-secondary text-xs w-8/12  md:text-lg md:mt-7.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
      </div>
      {/* <div className="card bg-white w-72.5 shadow-xl rounded-2.5xl md:col-start-8 md:col-end-9 my-12.5">
        <div className="card-image w-full">
          <img src={WebService} alt="Website Developer" className="w-full" />
        </div>
        <div className="px-5 pb-5">
          <h4 className="font-primary font-medium text-2.5xl">Website</h4>
          <p className="font-secondary text-gray-text mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            consectetur{" "}
          </p>
        </div>
      </div>
      {services().map((datas) => {
        return (
          <div className="card bg-white w-72.5 shadow-xl rounded-2.5xl md:col-start-1 md:col-end-4 my-12.5">
            <div className="card-image w-full">
              <img
                src={datas.img.WebService}
                alt="Website Developer"
                className="w-full"
              />
            </div>
            <div className="px-5 pb-5">
              <h4 className="font-primary font-medium text-2.5xl">
                {datas.name}
              </h4>
              <p className="font-secondary text-gray-text mt-5">
                {datas.description}
              </p>
            </div>
          </div>
        );
      })}
      <div className="card bg-white w-72.5 shadow-xl rounded-2.5xl md:col-start-5 md:col-end-8 my-12.5">
        <div className="card-image w-full">
          <img src={WebService} alt="Website Developer" className="w-full" />
        </div>
        <div className="px-5 pb-5">
          <h4 className="font-primary font-medium text-2.5xl">Website</h4>
          <p className="font-secondary text-gray-text mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            consectetur{" "}
          </p>
        </div>
      </div>
      <div className="card bg-white w-72.5 shadow-xl rounded-2.5xl md:col-start-9 md:col-end-12 my-12.5">
        <div className="card-image w-full">
          <img src={WebService} alt="Website Developer" className="w-full" />
        </div>
        <div className="px-5 pb-5">
          <h4 className="font-primary font-medium text-2.5xl">Website</h4>
          <p className="font-secondary text-gray-text mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            consectetur{" "}
          </p>
        </div>
      </div> */}
      <Card ColStart={8} ColEnd={9} />
      {/* <Card ColStart={1} ColEnd={4} />
      <Card ColStart={5} ColEnd={8} />
      <Card ColStart={9} ColEnd={12} /> */}
    </div>
  );
};

export default index;
