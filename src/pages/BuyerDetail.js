import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ProdukImage from "../components/ProdukImage";
import Image from "../assets/img/image_detailproduk.png";
import ModalDetailProduk from "../components/ModalDetailProduk";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import {
  getDetailProduct,
  getDetailDataProducts,
} from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

function BuyerDetail() {
  const dispatch = useDispatch();
  const detailProduct = useSelector(getDetailDataProducts);
  console.log(detailProduct, "detail produk");

  const { id } = useParams();
  console.log(id);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavigationBar />
      <div className="sm:flex sm:px-[236px] gap-[32px] sm:mt-10 relative">
        <Link
          className="absolute top-[44px] left-[16px] z-50 bg-white rounded-full sm:hidden"
          to="/"
        >
          <img src={Arrowleft} alt="Arrowleft" />
        </Link>
        <div className="sm:w-[600px]">
          <ProdukImage imageDetail={detailProduct.url} idProduct={id} />
          <div className="container hidden sm:block ">
            <div className="rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.15)] p-5 mt-10 ">
              <h1 className="pb-3 font-bold">Deskripsi</h1>
              <p>{detailProduct.productDescription}</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[336px] px-4 sm:px-0 absolute sm:static top-[344px] z-20 sm:z-0">
          <div className="container flex w-full -mt-10 z-50 sm:mt-0 static bg-white rounded-2xl">
            <div className="rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.15)] p-5 w-full sm:w-auto">
              <p className="font-semibold">{detailProduct.productName}</p>
              <p className="font-thin pt-2 text-gray-900">
                {detailProduct.productCategory}
              </p>
              <p className="text-sm font-semibold pt-4 sm:pb-8 ">
                Rp {detailProduct.productPrice}
              </p>
              <button
                onClick={handleNav}
                className=" duration-[1s] w-[300px] rounded-2xl px-6 py-[14px] bg-purple-700 items-center text-white hidden sm:block "
              >
                Saya tertarik dan ingin nego
              </button>
            </div>
          </div>
          <div className="container sm:mt-6 w-full">
            <div className="w-full bg-white h-[90px] mt-3 sm:mt-0 flex mb-10 p-5 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.15)] sm:max-w-md">
              <div className="rounded-xl h-[48px] w-[58px] overflow-hidden">
                <img src={Image} alt="#" />
              </div>
              <div className="">
                <p className="font-semibold">{detailProduct.username}</p>
                <p className="font-thin pt-2">Kota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container block sm:hidden mt-[250px] sm:mt-0 px-4 ">
        <div className="border rounded-xl shadow-lg p-5 mt-10 ">
          <h1 className="pb-3 font-bold">Deskripsi</h1>
          <p>{detailProduct.productDescription}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleNav}
          className="sm:ml-20 duration-[1s] w-[350px]  rounded-2xl px-6 py-[14px] bg-purple-700 items-center text-white fixed bottom-5 sm:hidden z-50"
        >
          Saya Tertarik dan ingin nego
        </button>
      </div>
      <ModalDetailProduk
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        productId={detailProduct.productId}
        productName={detailProduct.productName}
        productPrice={detailProduct.productPrice}
      />
    </div>
  );
}

export default BuyerDetail;
