import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import plus from "../assets/img/fi_plus.svg";
import NavigationBar from "../components/NavigationBar";
import { updateProduct } from "../features/productSlice";
import { useParams } from "react-router-dom";

function UpdateProduk() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const { id } = useParams();
  console.log(id);
  console.log(name);

  const dataProductToUpdate = useLocation();
  console.log(dataProductToUpdate);

  const user =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : "";
  const imagesFile = [];

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex, "list image");
    setImages(imageList);
  };

  images.forEach(function (item) {
    imagesFile.push(item.file);
    console.log(item.file);
  });

  const handlePreview = () => {
    let objImage = {};
    for (let i = 0; i < imagesFile.length; i++) {
      objImage["image" + i] = URL.createObjectURL(imagesFile[i]);
    }
    console.log(objImage, "obj image");
    localStorage.setItem("imagePreview", JSON.stringify(objImage));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("files", images[0].file);
    data.append(
      "product_name",
      name === "" ? dataProductToUpdate.state.productName : name
    );
    data.append(
      "product_description",
      description === ""
        ? dataProductToUpdate.state.productDescription
        : description
    );
    data.append("product_status", "Available");
    data.append(
      "product_price",
      price === "" ? dataProductToUpdate.state.productPrice : parseInt(price)
    );
    data.append(
      "product_category",
      category === "" ? dataProductToUpdate.state.productCategory : category
    );
    console.log(data);

    try {
      await dispatch(
        updateProduct({ userId: user.userId, productId: id, dataProduct: data })
      );
      navigate("/daftarJual");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <NavigationBar />
      <section className="py-6 flex justify-center ">
        <Link className="sm:block hidden" to="/daftarJual">
          <img src={Arrowleft} alt="img" />
        </Link>
        <form
          onSubmit={handleUpdateProduct}
          className="sm:w-[568px] sm:mx-[78px] h-[568px] w-[328px] flex flex-col justify-between duration-[1s]"
        >
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Nama Produk</label>
            <input
              type="text"
              defaultValue={dataProductToUpdate.state.productName}
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              placeholder="Nama Produk"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Harga Produk</label>
            <input
              type="text"
              defaultValue={dataProductToUpdate.state.productPrice}
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Rp 0,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Kategori</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4  text-xs"
            >
              <option value="none" hidden>
                {dataProductToUpdate.state.productCategory}
              </option>
              <option value="Hobi">Hobi</option>
              <option value="Kendaraan">Kendaraan</option>
              <option value="Fashion">Fashion</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Kesehatan">Kesehatan</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Deskripsi</label>
            <textarea
              type="textarea"
              defaultValue={dataProductToUpdate.state.productDescription}
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[80px] py-2 px-4 resize-none text-xs"
              placeholder="Contoh: Masih mulus"
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
            <Link
              to="/previewproduk"
              state={{
                image: imagesFile,
                name:
                  name === "" ? dataProductToUpdate.state.productName : name,
                description:
                  description === ""
                    ? dataProductToUpdate.state.productDescription
                    : description,
                price:
                  price === "" ? dataProductToUpdate.state.productPrice : price,
                category:
                  category === ""
                    ? dataProductToUpdate.state.productCategory
                    : category,
                productId: id,
              }}
            >
              <button
                type="submit"
                className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl border-2 border-purple-700 text-black font-medium text-xs duration-[1s]"
                onClick={handlePreview}
              >
                Preview
              </button>
            </Link>

            <button
              type="submit"
              className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl bg-purple-700 text-white font-medium text-xs duration-[1s]"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdateProduk;
