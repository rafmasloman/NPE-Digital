import React from "react";
import WebApp from "../../assets/images/website.png";
import AndroidApp from "../../assets/images/mobile_app.png";
import DesignIntefrace from "../../assets/images/uiux.png";
import DesktopApp from "../../assets/images/desktop_app.png";

const data = [
  {
    id: 1,
    name: "Website",
    img: { WebApp },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam consectetur ",
  },
  {
    id: 2,
    name: "Android",
    img: { AndroidApp },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam consectetur ",
  },
  {
    id: 3,
    name: "UI/UX Design",
    img: { DesignIntefrace },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam consectetur ",
  },
  {
    id: 4,
    name: "Desktop App",
    img: { DesktopApp },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam consectetur ",
  },
];

const card = () => {
  const image = [WebApp, AndroidApp, DesignIntefrace, DesktopApp];
  const ColStart = [8, 1, 5, 9];
  const ColEnd = [9, 4, 8, 12];
  return data.map((res, index) => {
    console.log(res.img);
    return (
      <div
        className={`card bg-white w-72.5 shadow-xl rounded-2.5xl md:col-start-${ColStart[index]} md:col-end-${ColEnd[index]} my-12.5`}
      >
        <div className="card-image w-full">
          <img src={image[index]} alt="Website Developer" className="w-full" />
        </div>
        <div className="px-5 pb-5">
          <h4 className="font-primary font-medium text-2.5xl">{res.name}</h4>
          <p className="font-secondary text-gray-text mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            consectetur{" "}
          </p>
        </div>
      </div>
    );
  });
};

export default card;
