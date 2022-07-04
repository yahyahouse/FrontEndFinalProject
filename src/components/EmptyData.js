import React from "react";
import emptyIcon from "../assets/img/empty-icon.svg";

export const EmptyData = () => {
  return (
    <div>
      <img src={emptyIcon} alt="empty-icon" className="block mx-auto" />
      <p className="text-sm font-normal text-[#151515] text-center mt-6">
        Belum ada produkmu yang diminati nih, <br /> sabar ya rejeki nggak
        kemana kok
      </p>
    </div>
  );
};
