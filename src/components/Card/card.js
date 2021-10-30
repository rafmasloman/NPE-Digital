import React from "react";
import WebApp from "../../assets/illustrations/website_ic.svg";
import AndroidApp from "../../assets/illustrations/mobile_ic.svg";
import DesignIntefrace from "../../assets/illustrations/desktop_ic.svg";
import DesktopApp from "../../assets/illustrations/uiux_ic.svg";

// todo data untuk layanan yang disediakan
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
  // todo Menampung gambar yang di import ke dalam array karena gambar yang diimport berada dalam bentuk objek maka tampung ke dalam array
  const image = [WebApp, AndroidApp, DesignIntefrace, DesktopApp];

  // todo Grid Column Start
  const ColStart = [1, 4, 7, 10];

  // todo Grid Column End
  const ColEnd = [3, 6, 9, 12];
  return data.map((res, index) => {
    return (
      <div
        className={`card bg-white w-72.5 p-5 md:col-start-${ColStart[index]} md:col-end-${ColEnd[index]} mt-16.5 hover:bg-white rounded-3xl hover:shadow-2xl`}
        key={res.id}
      >
        <div className="card-image flex justify-center">
          <img src={image[index]} alt="Website Developer" className="" />
        </div>
        <div className="flex px-5 justify-center flex-col items-center mt-7.5">
          <h4 className="font-primary font-medium text-2.5xl">{res.name}</h4>
          <p className="font-secondary text-center text-gray-text mt-2.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            consectetur{" "}
          </p>
        </div>
      </div>
    );
  });
};

export default card;
