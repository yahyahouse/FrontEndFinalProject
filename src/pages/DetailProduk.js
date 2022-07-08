import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ProdukImage from "../components/ProdukImage";
import Image from "../assets/img/image_detailproduk.png";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

const DetailProduk = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : "";
  const dataProduct = useLocation();
  console.log(dataProduct);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("files", dataProduct.state.image[0].file);
    data.append("product_name", dataProduct.state.name);
    data.append("product_description", dataProduct.state.description);
    data.append("product_price", parseInt(dataProduct.state.price));
    data.append("product_category", dataProduct.state.category);
    data.append("productId", parseInt(dataProduct.state.productId));

    try {
      await dispatch(addProduct({ id: user.userId, dataProduct: data }));
      navigate("/daftarJual");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="">
      <NavigationBar />
      <div className="sm:flex sm:px-[236px] gap-[32px] mt-[-84px] sm:mt-28 relative">
        <Link
          className="absolute top-[44px] left-[16px] z-50 bg-white rounded-full sm:hidden"
          to="/"
        >
          <img src={Arrowleft} alt="Arrowleft" />
        </Link>
        <div className="sm:w-[600px]">
          <ProdukImage />
          <div className="container hidden sm:block ">
            <div className="rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.15)] p-5 mt-10 ">
              <h1 className="pb-3 font-bold">Deskripsi</h1>
              <p>{dataProduct.state.description}</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[336px] px-4 sm:px-0 absolute sm:static top-[320px] z-20 sm:z-0">
          <div className="container flex w-full -mt-10 z-50 sm:mt-0 static bg-white rounded-2xl">
            <div className="rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.15)] p-5 w-full sm:w-auto">
              <p className="font-semibold">{dataProduct.state.name}</p>
              <p className="font-thin pt-2 text-gray-900">
                {dataProduct.state.category}
              </p>
              <p className="text-sm font-semibold pt-4 sm:pb-8 ">
                {dataProduct.state.price}
              </p>
              <button
                onClick={handleAddProduct}
                className=" duration-[1s] w-[300px] h-[40px] rounded-2xl bg-purple-700 items-center text-white hidden sm:block "
              >
                Terbitkan
              </button>
              <button className="w-[300px] h-[40px] mt-4 border-2 rounded-2xl border-purple-700 justify-center items-center font-medium hidden sm:block">
                Edit
              </button>
            </div>
          </div>
          <div className="container sm:mt-6 w-full">
            <div className="w-full bg-white h-[90px] mt-3 sm:mt-0 flex mb-10 p-5 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.15)] sm:max-w-md">
              <div className="rounded-xl h-[48px] w-[58px] overflow-hidden">
                <img src={Image} alt="#" />
              </div>
              <div className="">
                <p className="font-semibold">{user.username}</p>
                <p className="font-thin pt-2">Kota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container block sm:hidden mt-[220px] sm:mt-0 px-4 ">
        <div className="border rounded-xl shadow-lg p-5 mt-10 ">
          <h1 className="pb-3 font-bold">Deskripsi</h1>
          <p>{dataProduct.state.description}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleAddProduct}
          className=" duration-[1s] w-[350px] px-6 py-[14px] rounded-2xl 
            bg-purple-700 items-center text-white fixed bottom-5 sm:hidden z-50"
        >
          Terbitkan
        </button>
      </div>
    </div>
  );
};

export default DetailProduk;
