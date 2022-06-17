import React from "react";

const Modal08 = () => {
  return (
    <div className="bg-black absolute bg-opacity-50 inset-0 flex items-end">
      <div className="bg-white h-[438px] w-full flex flex-col items-center rounded-t-[16px]">
        <button className="w-full h-[38px] flex items-center justify-center">
          <div className="w-[60px] h-[6px] rounded-[20px] bg-gray-900" />
        </button>
        <div className="w-[360px] border flex flex-col items-center px-[32px]">
          <p className="text-sm font-medium mb-[8px] w-full">
            Yeay kamu berhasil mendapat harga yang sesuai
          </p>
          <p className="text-sm font-normal text-gray-900 mb-[16px] w-full">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div className="p-16 border w-full">
            <p>Product Match</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal08;
