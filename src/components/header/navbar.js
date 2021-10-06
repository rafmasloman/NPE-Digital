import React from "react";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <nav className="container mx-auto flex md:flex-row flex-col justify-between md:px-40 py-8">
      <div className="">
        <span className="text-blue-secondary font-primary font-bold text-2xl">
          NPE<span className="text-blue-primary">Digital</span>{" "}
        </span>
      </div>
      <div className="flex md:flex-row flex-col font-primary md:items-center mt-5 md:mt-0">
        <Link className="text-blue-secondary md:px-10 py-4 md:py-0" to="#">
          Home
        </Link>

        <Link className="text-blue-secondary md:px-10 py-4 md:py-0" to="#">
          Our Services
        </Link>

        <Link className="text-blue-secondary md:px-10 py-4 md:py-0" to="#">
          About
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="font-primary text-blue-secondary py-4 md:py-0" to="#">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default navbar;
