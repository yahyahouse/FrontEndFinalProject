import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ProdukImage from "../components/ProdukImage";
import produkimage from "../assets/img/detailproduk-image.png";
import Image from "../assets/img/image_detailproduk.png";
import ModalDetailProduk from "../components/ModalDetailProduk";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import { Alert } from "antd";
import {
  getDetailProduct,
  getDetailProductStatus,
  getDetailDataProducts,
} from "../features/productSlice";
import {
  getAddOfferStatus,
  getBuyerOfferHistory,
  getBuyerOfferHistoryData,
} from "../features/offerSlice";
import { useDispatch, useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";

function DetailProduk() {
  const dispatch = useDispatch();
  const user =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : "";
  const { id } = useParams();
  const detailProduct = useSelector(getDetailDataProducts);
  const detailProductStatus = useSelector(getDetailProductStatus);
  const addOfferStatus = useSelector(getAddOfferStatus);
  const buyerOfferHistory = useSelector(getBuyerOfferHistoryData);
  // console.log(addOfferStatus, "add offer status");
  console.log(detailProduct, "detail produk");
  // console.log(buyerOfferHistory, "buyer offer");
  // console.log(user.userId, detailProduct.userId);

  const [hasOffered, setHasOffered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const onClose = (e) => {
    console.log(e, "I was closed.");
  };

  useEffect(() => {
    dispatch(getBuyerOfferHistory(user.userId));
    dispatch(getDetailProduct(id));
    // Mengecek jika buyer ini sudah pernah menawar produk ini
    buyerOfferHistory.forEach(function (item) {
      item.userId === user.userId && item.offerStatus === "Diminati"
        ? setHasOffered(true)
        : setHasOffered(false);
    });
  }, [dispatch, id, user.userId]);

  return (
    <div>
      <div className="hidden md:block">
        <NavigationBar />
      </div>

      {addOfferStatus === "success" ? (
        <Alert
          message="Harga tawaranmu berhasil dikirim ke penjual"
          type="success"
          closable
          onClose={onClose}
          className="w-[340px] sm:w-[520px] flex mx-auto mt-24 sm:-mt-3 rounded-xl bg-[#73CA5C] px-6 py-4  text-sm font-medium z-50 fixed left-[50%] -translate-x-[50%]"
        />
      ) : (
        ""
      )}

      {detailProductStatus === "loading" ? (
        <div className="flex mx-auto mt-32 justify-center">
          <SyncLoader color="#7126B5" margin={2} size={12} />
        </div>
      ) : (
        <div>
          <div className="sm:flex sm:px-[236px] gap-[32px] mt-12 sm:mt-32 relative">
            <Link
              className="absolute top-[44px] left-[16px] z-50 bg-white rounded-full sm:hidden"
              to="/"
            >
              <img src={Arrowleft} alt="Arrowleft" />
            </Link>
            <div className="sm:w-[600px]">
              {detailProduct ? (
                <ProdukImage
                  imageDetail={[
                    detailProduct.url ? detailProduct.url : produkimage,
                    detailProduct.url2 ? detailProduct.url2 : produkimage,
                    detailProduct.url3 ? detailProduct.url3 : produkimage,
                    detailProduct.url4 ? detailProduct.url4 : produkimage,
                  ]}
                  idProduct={id}
                />
              ) : (
                <ProdukImage
                  imageDetail={[
                    produkimage,
                    produkimage,
                    produkimage,
                    produkimage,
                  ]}
                  idProduct={id}
                />
              )}
              <div className="container hidden sm:block ">
                <div className="rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.15)] p-5 mt-10 ">
                  <h1 className="pb-3 font-bold">Deskripsi</h1>
                  <p>
                    {detailProduct
                      ? detailProduct.productDescription
                      : "Deskripsi kosong"}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[336px] px-4 sm:px-0 absolute sm:static top-[316px] z-20 sm:z-0">
              <div className="container flex w-full -mt-10 z-50 sm:mt-0 static bg-white rounded-2xl">
                <div className="rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.15)] p-5 w-full sm:w-auto">
                  <p className="font-semibold">
                    {detailProduct
                      ? detailProduct.productName
                      : "Produk name kosong"}
                  </p>
                  <p className="font-thin pt-2 text-gray-900">
                    {detailProduct
                      ? detailProduct.productCategory
                      : "Category kosong"}
                  </p>
                  <p className="text-sm font-semibold pt-4 sm:pb-8 ">
                    Rp{" "}
                    {detailProduct
                      ? detailProduct.productPrice
                      : "Price kosong"}
                  </p>
                  {detailProduct ? (
                    addOfferStatus === "success" ||
                    hasOffered ||
                    user.userId === detailProduct.userId ? (
                      <button
                        onClick={handleNav}
                        className="duration-[1s] w-[300px] rounded-2xl px-6 py-[14px] bg-gray-700 items-center text-white hidden sm:block "
                        disabled
                      >
                        {user.userId === detailProduct.userId
                          ? "Saya tertarik dan ingin nego"
                          : "Menunggu respon penjual"}
                      </button>
                    ) : (
                      <button
                        onClick={handleNav}
                        className="duration-[1s] w-[300px] rounded-2xl px-6 py-[14px] bg-purple-700 items-center text-white hidden sm:block "
                      >
                        Saya tertarik dan ingin nego
                      </button>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="container sm:mt-6 w-full">
                <div className="w-full bg-white h-[90px] mt-3 sm:mt-0 flex mb-10 p-5 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.15)] sm:max-w-md">
                  <div className="rounded-xl h-[48px] w-[58px] overflow-hidden">
                    <img src={Image} alt="#" />
                  </div>
                  <div className="">
                    <p className="font-semibold">
                      {detailProduct
                        ? detailProduct.username
                        : "Username kosong"}
                    </p>
                    <p className="font-thin pt-2">Kota</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container block sm:hidden mt-[250px] sm:mt-0 px-4 ">
            <div className="border rounded-xl shadow-lg p-5 mt-10 ">
              <h1 className="pb-3 font-bold">Deskripsi</h1>
              <p>
                {detailProduct
                  ? detailProduct.productDescription
                  : "Deskrkipsi kosong"}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {detailProduct ? (
              hasOffered || user.userId === detailProduct.userId ? (
                <button
                  onClick={handleNav}
                  className="sm:ml-20 duration-[1s] w-[350px] rounded-2xl px-6 py-[14px] bg-gray-700 items-center text-white fixed bottom-5 sm:hidden z-50"
                  disabled
                >
                  {user.userId === detailProduct.userId
                    ? "Saya tertarik dan ingin nego"
                    : "Menunggu respon penjual"}
                </button>
              ) : (
                <button
                  onClick={handleNav}
                  className="sm:ml-20 duration-[1s] w-[350px] rounded-2xl px-6 py-[14px] bg-purple-700 items-center text-white fixed bottom-5 sm:hidden z-50"
                >
                  Saya Tertarik dan ingin nego
                </button>
              )
            ) : (
              ""
            )}
          </div>
          <ModalDetailProduk
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            productId={detailProduct ? detailProduct.productId : "Id kosong"}
            productName={
              detailProduct ? detailProduct.productName : "Name kosong"
            }
            productPrice={
              detailProduct ? detailProduct.productPrice : "Price kosong"
            }
          />
        </div>
      )}
    </div>
  );
}

export default DetailProduk;
