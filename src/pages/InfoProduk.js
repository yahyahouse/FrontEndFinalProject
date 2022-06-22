import React from "react";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";

import Arrowleft from "../assets/img/fi_arrow-left.svg";
import plus from "../assets/img/fi_plus.svg";
import NavigationBar from "../components/NavigationBar";

const InfoProduk = () => {
  // IMAGE UPLOADING
  const [images, setImages] = React.useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <NavigationBar />
      <section className="py-6 flex justify-center ">
        <Link className="sm:block hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <form className="sm:w-[568px] sm:mx-[78px] h-[568px] w-[328px] flex flex-col justify-between duration-[1s]">
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Nama Produk</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Nama Produk"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Harga Produk</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Rp 0,00"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Kategori</label>
            <select className="border-2 border-gray-300 rounded-2xl h-[48px] px-4 text-xs">
              <option value="none" hidden>
                Pilih Kategori
              </option>
              <option value="1">Kategori 1</option>
              <option value="1">Kategori 2</option>
              <option value="1">Kategori 3</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Alamat</label>
            <textarea
              type="textarea"
              className="border-2 border-gray-300 rounded-2xl h-[80px] py-1 px-4 resize-none text-xs"
              placeholder="Contoh: Jalan Ikan Hiu 33"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Foto Produk</label>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className="">
                  <button
                    className={
                      isDragging
                        ? "w-[96px] h-[96px] border-2 border-red-700 rounded-xl border-dashed flex items-center justify-center mb-3"
                        : "w-[96px] h-[96px] border-2 rounded-xl border-dashed flex items-center justify-center mb-3"
                    }
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <img className="-z-50" src={plus} alt="plus" />
                  </button>
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
            <Link to={"#"}>
              <button
                type="submit"
                className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl bg-purple-700 text-white font-medium text-xs duration-[1s]"
              >
                Terbitkan
              </button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default InfoProduk;
