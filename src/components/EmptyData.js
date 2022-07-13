import React from "react";
import emptyIcon from "../assets/img/empty-icon.svg";

export const EmptyData = ({ message }) => {
  return (
    <div className="px-10 py-4">
      <img src={emptyIcon} alt="empty-icon" className="block mx-auto" />
      <p className="text-sm font-normal text-[#151515] text-center mt-6">
        {message}, <br /> sabar ya rejeki nggak kemana kok
      </p>
    </div>
  );
};
