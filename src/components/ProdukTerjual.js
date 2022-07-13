import React from "react";
import productImage from "../assets/img/notifImage.png";

export const ProdukTerjual = () => {
  return (
    <div className="">
      <div className="hover:bg-gray-500 cursor-pointer">
        <div className="px-4 pt-4">
          <div
            className={`flex gap-12 w-full justify-between border-b border-gray-500 pb-4`}
          >
            <div className="flex gap-6">
              <div>
                <img
                  src={productImage}
                  alt="productImage"
                  className="w-12 h-12 rounded-xl object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] text-gray-900">Penawaran produk</p>
                <h3 className="mt-1 text-sm font-normal text-black">
                  Jam Tangan casio
                </h3>
                <h3 className="mt-1 text-sm font-normal text-black">
                  Rp 200000
                </h3>
                <h3 className="mt-1 text-sm font-normal text-black">
                  Ditawar Rp 100000
                </h3>
              </div>
            </div>

            <div className="flex gap-2">
              <p className="text-[10px] text-gray-900">Terjual</p>
              <div className="w-2 h-2 rounded bg-purple-700 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
