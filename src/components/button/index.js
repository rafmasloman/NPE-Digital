import React from "react";

const index = ({ name, onClick, btnType, iconImg }) => {
  return btnType === "icon" ? (
    <div>
      <img src={iconImg} alt="HamburgerIcon" onClick={onClick} />
    </div>
  ) : (
    <button
      className="bg-blue-500 flex  justify-items-center py-2 px-4 rounded-full shadow-primary-btn md:px-7.5 md:py-3.5"
      onClick={onClick}
    >
      <span className="text-xs font-primary font-medium text-white md:text-xl">
        {name}
      </span>
    </button>
  );
};

export default index;
