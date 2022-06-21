import React from "react";
import productImage from "../assets/img/notifImage.png";

const ModalNotifikasi = ({
  width,
  position,
  border,
  borderColor,
  shadow,
  rounded,
  paddingX,
  marginT,
}) => {
  return (
    <div className={`md:px-[${paddingX}] md:mt-[${marginT}]`}>
      <div
        className={`flex gap-12 bg-white p-6 rounded-${rounded} w-${width} ${position} ${border} ${borderColor} shadow-[${shadow}]`}
      >
        <div className="flex gap-4">
          <div>
            <img
              src={productImage}
              alt="productImage"
              className="w-12 h-12 rounded-xl"
            />
          </div>
          <div>
            <p className="text-[10px] text-gray-900">Penawaran produk</p>
            <h3 className="mt-1 text-sm font-normal text-black">
              Jam Tangan Casio
            </h3>
            <h3 className="mt-1 text-sm font-normal text-black">Rp 250.000</h3>
            <h3 className="mt-1 text-sm font-normal text-black">
              Ditawar Rp 200.000
            </h3>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-[10px] text-gray-900">20 April, 14:04</p>
          <div className="w-2 h-2 rounded bg-red-500 mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalNotifikasi;
