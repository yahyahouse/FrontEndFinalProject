import React from "react";
import productImage from "../assets/img/notifImage.png";

const Notifikasi = ({ notifikasi, setNotifikasi }) => {
  console.log(notifikasi);
  return (
    <div
      onMouseEnter={(e) => setNotifikasi(notifikasi)}
      onMouseLeave={(e) => setNotifikasi(false)}
      className={
        notifikasi
          ? "md:flex gap-12 bg-white p-6 rounded-2xl fixed top-16 right-40 shadow-[0_0_4px_rgba(0,0,0,0.15)] z-30"
          : "hidden"
      }
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
  );
};

export default Notifikasi;
