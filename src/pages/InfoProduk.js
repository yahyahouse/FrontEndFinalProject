import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import plus from "../assets/img/fi_plus.svg";
import NavigationBar from "../components/NavigationBar";
import { addProduct } from "../features/productSlice";
import { getUser } from "../features/authSlice";

const InfoProduk = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // IMAGE UPLOADING
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [address, setAdress] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState([]);
  console.log(images);
  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : "";

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productName", name);
    data.append("productDescription", description);
    data.append("productPrice", price);
    data.append("address", address);
    data.append("productImage", "0");
    data.append("userId", user.userId);
    dispatch(addProduct(data));
  };

  return (
    <div>
      <NavigationBar />
      <section className="py-6 flex justify-center ">
        <Link className="sm:block hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <form
          onSubmit={handleAddProduct}
          className="sm:w-[568px] sm:mx-[78px] h-[568px] w-[328px] flex flex-col justify-between duration-[1s]"
        >
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Nama Produk</label>
            <input
              type="text"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              placeholder="Nama Produk"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Harga Produk</label>
            <input
              type="text"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Rp 0,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Alamat</label>
            {/* <select className="border-2 border-gray-300 rounded-2xl h-[48px] px-4 text-xs">
              <option value="none" hidden>
                Pilih Kategori
              </option>
              <option value="1">Hobi</option>
              <option value="1">Kendaraan</option>
              <option value="1">Fashion</option>
              <option value="1">Elektronik</option>
              <option value="1">Aksesoris</option>
            </select> */}
            <input
              type="text"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Alamat"
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Deskripsi</label>
            <textarea
              type="textarea"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[80px] py-2 px-4 resize-none text-xs"
              placeholder="Contoh: Jalan Ikan Hiu 33"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Foto Produk</label>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={4}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className="flex gap-1">
                  <div
                    className={
                      isDragging
                        ? "w-[96px] h-[96px] border-2 border-red-700 rounded-xl border-dashed flex items-center justify-center mb-3"
                        : "w-[96px] h-[96px] border-2 rounded-xl border-dashed flex items-center justify-center mb-3"
                    }
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <img className="-z-50" src={plus} alt="plus" />
                  </div>
                  <div className="flex">
                    &nbsp;
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="w-[96px] h-[96px] overflow-hidden flex items-center justify-center cursor-pointer mr-3"
                      >
                        <div
                          onClick={() => onImageRemove(index)}
                          className="absolute hover:bg-black opacity-30 w-[96px] h-[96px]"
                        />
                        <img src={image["data_url"]} alt="" width="100" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
          <div className="flex justify-between">
            <Link to={"#"}>
              <button
                type="submit"
                className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl border-2 border-purple-700 text-black font-medium text-xs duration-[1s]"
              >
                Preview
              </button>
            </Link>
            <button
              type="submit"
              className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl bg-purple-700 text-white font-medium text-xs duration-[1s]"
            >
              Terbitkan
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default InfoProduk;
