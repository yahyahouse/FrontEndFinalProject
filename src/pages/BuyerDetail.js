import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ProdukImage from "../components/ProdukImage";
import Image from "../assets/img/image_detailproduk.png";
import ModalDetailProduk from "../components/ModalDetailProduk";
import Arrowleft from "../assets/img/fi_arrow-left.svg";

function BuyerDetail() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <NavigationBar /> 
            <div className="sm:flex sm:px-[236px] gap-[32px] sm:mt-10 relative">
                <Link className="absolute top-[44px] left-[16px] z-50 bg-white rounded-full sm:hidden" to="/">
                    <img src={Arrowleft} alt="Arrowleft" />
                </Link>
                <div>
                    <ProdukImage />
                    <div className="container hidden sm:block ">
                        <div className="border rounded-xl shadow-lg p-5 mt-10 ">
                            <h1 className="pb-3 font-bold">Deskripsi</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" w-full px-4 sm:px-0 absolute sm:static top-[380px] z-20 sm:z-0">
                    <div className="container flex w-full -mt-10 z-50 sm:mt-0 static bg-white rounded-2xl">
                        <div className="border rounded-xl shadow-lg p-5 w-full sm:w-auto">
                            <p className="font-semibold">Jam Tangan Casio</p>
                            <p className="font-thin pt-2 text-gray-900">Aksesoris</p>
                            <p className="text-sm font-semibold pt-4 sm:pb-8 ">Rp 250.000</p>
                            <button onClick={handleNav} className=" duration-[1s] w-[300px] h-[40px] rounded-2xl bg-purple-700 items-center text-white hidden sm:block ">Saya Tertarik dan ingin Nego</button>
                        </div>
                    </div>
                    <div className="container sm:mt-6 w-full">
                        <div className="w-full bg-white h-[90px] mt-3 sm:mt-0 flex mb-10 p-5 border rounded-2xl shadow-lg sm:max-w-md">
                            <div className="rounded-xl h-[48px] w-[58px] overflow-hidden">
                                <img src={Image} alt="#" />
                            </div>
                            <div className="">
                                <p className="font-semibold">Nama Penjual</p>
                                <p className="font-thin pt-2">Kota</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="container block sm:hidden mt-[250px] sm:mt-0 px-4 ">
                <div className="border rounded-xl shadow-lg p-5 mt-10 ">
                    <h1 className="pb-3 font-bold">Deskripsi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <button onClick={handleNav} className="sm:ml-20 duration-[1s] w-[350px] h-[40px] rounded-2xl bg-purple-700 items-center text-white fixed bottom-5 sm:hidden z-50">Saya Tertarik dan ingin nego</button>  
            </div>
            <ModalDetailProduk isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default BuyerDetail;