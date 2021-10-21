import React, { useState } from "react";
import FacebookIcon from "../../assets/icons/facebook_ic.svg";
import InstagramIcon from "../../assets/icons/instagram_ic.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Footer = () => {
  const data = [
    {
      title: "Quick Links",
      textOne: "Home",
      textTwo: "Services",
      textThree: "About",
    },
    {
      title: "Legal",
      textOne: "Terms & Condition",
      textTwo: "Privacy Policy",
      textThree: "Jam Operasional",
    },
    {
      title: "Follow Us",
      textOne: "Instagram",
      textTwo: "Facebook",
      textThree: "",
    },
    {
      title: "Keep in Touch",
      textOne: "npedigital@gmail.com",
      textTwo: "0821......",
      textThree: "",
    },
  ];
  const [footer, setFooter] = useState(data);
  return (
    <div className="grid grid-cols-12 gap-6 bg-blue-secondary  w-full absolute left-0 px-5 mt-17.5 py-12.5 md:px-40">
      <div className="footer-content  col-span-12 md:col-span-3">
        <span className="text-white font-primary font-bold text-2xl">
          NPE <span className="text-blue-primary">Digital</span>{" "}
        </span>
        <p className="text-white font-light mt-7.5 font-secondary">
          Website yang menyedikan jasa membuat website,aplikasi dan lain-lain
          dengan tim yang berpengalaman
        </p>
        <div className="flex mt-5">
          <img src={FacebookIcon} alt="FacebookIcon" className="mr-7.5" />
          <img src={InstagramIcon} alt="FacebookIcon" />
        </div>
      </div>
      <Router>
        {footer.map((text, index) => {
          const colStart = [5, 7, 9, 11];
          const colEnd = [7, 9, 11, 13];
          return (
            <div
              className={`footer-links col-span-6 md:col-start-${colStart[index]} md:col-end-${colEnd[index]}`}
              key={index + 1}
            >
              <div className="links">
                <h3 className="font-secondary font-bold text-white">
                  {text.title}
                </h3>
                <div className="flex flex-col mt-7.5">
                  <Link
                    to={`${text.textOne.toLowerCase()}}`}
                    className={`${text.textOne.toLowerCase()} font-secondary text-white`}
                  >
                    {text.textOne}
                  </Link>
                  <Link
                    className={`${text.textTwo.toLowerCase()} mt-7.5 font-secondary text-white`}
                  >
                    {text.textTwo}
                  </Link>
                  <Link
                    className={`${text.textThree.toLowerCase()} mt-7.5 font-secondary text-white`}
                  >
                    {text.textThree}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="footer-links col-span-6 md:col-start-5 md:col-end-7">
          <div className="links">
            <h3>Quick Links</h3>
            <div className="flex flex-col">
              <Link to="/home">Home</Link>
              <Link>Services</Link>
              <Link>About</Link>
            </div>
          </div>
        </div>
        <div className="footer-links col-start-7 col-end-13 md:col-start-7 md:col-end-9 ">
          <div className="links">
            <h3>Legal</h3>
            <div className="flex flex-col">
              <Link to="/home">Terms & Condition</Link>
              <Link>Privacy Policy</Link>
              <Link>Jam Operasional</Link>
            </div>
          </div>
        </div>
        <div className="footer-links col-span-6 md:col-start-9 md:col-end-11">
          <div className="links">
            <h3>Follow Us</h3>
            <div className="flex flex-col">
              <Link to="/home">Instagram</Link>
              <Link>Facebook</Link>
            </div>
          </div>
        </div>
        <div className="footer-links  col-start-7 col-end-13 md:col-start-11 md:col-end-13">
          <div className="links">
            <h3>Keep in Touch</h3>
            <div className="flex flex-col">
              <Link to="/home">npedigital@gmail.com</Link>
              <Link>+6281342777362</Link>
            </div>
          </div>
        </div> */}
      </Router>
    </div>
  );
};

export default Footer;
