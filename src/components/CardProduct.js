import React from "react";
import cardImage from "../assets/img/card-image.png";

const cardProduct = () => {
  return (
    <div className="shadow-md px-2 pt-2 pb-4 w-[182px]">
      <img src={cardImage} alt="cardImage" />
      <h3 className="mt-2 text-sm font-normal">Jam Tangan Casio</h3>
      <p className="mt-1 text-[10px] font-normal text-gray-900">Aksesoris</p>
      <h3 className="mt-2 text-sm font-normal">Rp 250.000</h3>
    </div>
  );
};

export default cardProduct;
