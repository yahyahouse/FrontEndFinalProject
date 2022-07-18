import React from "react";
import { FiEdit3, FiSettings, FiDownload } from "react-icons/fi";
import { BiStoreAlt } from "react-icons/bi";
import profilePicture from "../assets/img/fi_camera.svg";
import { Link } from "react-router-dom";

const DropdownAccount = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload(true);
  };
  return (
    <div>
      <img
        src={profilePicture}
        alt="profilePicture"
        className="block md:hidden m-auto mt-6 md:mt-0"
        width={96}
        height={96}
      />
      <div className="py-4 bg-white md:shadow-[0_0_4px_rgba(0,0,0,0.15)] rounded-2xl [&>div:last-child>div>div]:border-none">
        <Link to="/daftarJual">
          <div className="hover:bg-gray-500 cursor-pointer">
            <div className="px-4 pt-4">
              <div className="pb-4 flex gap-5 border-b border-gray-500">
                <BiStoreAlt className="text-purple-900 text-lg" />{" "}
                <h3 className="text-sm font-normal text-black">Daftar Jual</h3>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/infoprofile">
          <div className="hover:bg-gray-500 cursor-pointer">
            <div className="px-4 pt-4">
              <div className="pb-4 flex gap-5 border-b border-gray-500">
                <FiEdit3 className="text-purple-900 text-lg" />{" "}
                <h3 className="text-sm font-normal text-black">Ubah Akun</h3>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/settingaccount">
          <div className="hover:bg-gray-500 cursor-pointer">
            <div className="px-4 pt-4">
              <div className="pb-4 flex gap-5 border-b border-gray-500">
                <FiSettings className="text-purple-900 text-lg" />{" "}
                <h3>Pengaturan Akun</h3>
              </div>
            </div>
          </div>
        </Link>
        <div
          className="hover:bg-gray-500 cursor-pointer"
          onClick={handleLogout}
        >
          <div className="px-4 pt-4">
            <div className="pb-4 flex gap-5 border-b border-gray-500">
              <FiDownload className="text-purple-900 text-lg -rotate-90" />{" "}
              <h3>Keluar</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownAccount;
