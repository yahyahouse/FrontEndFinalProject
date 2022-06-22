import React from "react";
import cardImage from "../assets/img/card-image.png";

const cardProduct = ({ cardWidth }) => {
  return (
    <div
      className={`shadow-[0_0_4px_rgba(0,0,0,0.15)] px-2 pt-2 pb-4 w-full md:w-[${cardWidth}]]`}
    >
      <img src={cardImage} alt="cardImage" className="w-full" />
      <h3 className="mt-2 text-sm font-normal text-black">Jam Tangan Casio</h3>
      <p className="mt-1 text-[10px] font-normal text-gray-900">Aksesoris</p>
      <h3 className="mt-2 text-sm font-normal">Rp 250.000</h3>
    </div>
  );
};

export default cardProduct;
