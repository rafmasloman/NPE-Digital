import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../assets/icons/icon-hamburger.svg";
import Button from "../../components/button";
function Navbar() {
  // todo useState isHidden digunakan untuk hamburger icon dimana ketika di klik pada mobile responsive akan memunculkan navbar
  const [isHidden, setHidden] = useState(false);
  return (
    <nav className="container mx-auto flex md:flex-row flex-col justify-between py-8">
      <div className="flex justify-between">
        <span className="text-blue-secondary font-primary font-bold text-2xl">
          NPE<span className="text-blue-primary">Digital</span>{" "}
        </span>
        <div className="flex md:hidden">
          {/* //todo tombol untuk di click pada navbar ketika di mobile responsive */}
          {/* //todo Menggunakan Component Button */}
          {/* //todo setHidden(!isHidden) artinnya ketika di klik maka nilai nya akan berubah true false true false */}
          <Button
            onClick={() => setHidden(!isHidden)}
            iconImg={Hamburger}
            btnType="icon"
          />
        </div>
      </div>
      <div
        className={`${
          isHidden ? "flex" : "hidden"
        } md:flex md:flex-row flex-col font-primary md:items-center mt-5 md:mt-0`}
      >
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
      <div className={` ${isHidden ? "flex" : "hidden"}  md:flex items-center`}>
        <Link className="font-primary text-blue-secondary py-4 md:py-0" to="#">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
