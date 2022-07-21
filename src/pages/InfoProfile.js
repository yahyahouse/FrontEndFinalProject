import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserById,
  detailUser,
  userEdit,
  getuserUpdateStatus,
  clearStatusUpdateProfile,
} from "../features/userSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { AiOutlineCamera } from "react-icons/ai";
import { BeatLoader } from "react-spinners";
import { Alert } from "antd";

// import Camera from "../assets/img/fi_camera.svg";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import NavigationBar from "../components/NavigationBar";

const InfoProfile = () => {
  const { id } = useParams();

  let nama = null;
  // GET_API START
  const dispatch = useDispatch();
  const getUser = useSelector(detailUser);
  const userUpdateStatus = useSelector(getuserUpdateStatus);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id, userUpdateStatus]);
  // GET_API END
  // IMAGE_UPLOADING START
  const [images, setImages] = useState([]);
  console.log(images, "image");
  const maxNumber = 1;
  console.log(getUser, "get data");

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  // IMAGE_UPLOADING END
  // console.log("getUser.full_name_user", getUser.fullNameUser);
  if (getUser.fullNameUser == null || undefined) {
    nama = getUser.username;
  } else {
    nama = getUser.fullNameUser;
  }

  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  console.log(submitted);

  const onClose = (e) => {
    dispatch(clearStatusUpdateProfile());
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const data = new FormData();
    data.append("userId", id);
    data.append(
      "full_name_user",
      username === "" ? getUser.username : username
    );
    data.append("address", address === "" ? getUser.address : address);
    data.append("city", city === "" ? getUser.city : city);
    data.append("phone", phone === "" ? getUser.phone : phone);
    data.append("users_image", images.length === 0 ? "" : images[0].file);

    try {
      if (
        (username || getUser.username) &&
        (address || getUser.address) &&
        (city || getUser.city) &&
        (phone || getUser.phone) &&
        images.length !== 0
      ) {
        let response = await dispatch(
          userEdit({
            data: data,
          })
        );
        console.log(response, "berhasil");
      }
    } catch (error) {
      console.error(error.message, "gagal");
    }
  };
  // option
  let render;
  if (getUser.city) {
    render = (
      <option defaultValue={getUser.city} selected>
        {getUser.city}
      </option>
    );
  }
  // GET_DATA END
  return (
    <div>
      <NavigationBar />
      {userUpdateStatus === "success" ? (
        <Alert
          message="Data berhasil diperbaharui"
          type="success"
          closable
          onClose={onClose}
          className="w-[340px] sm:w-[500px] flex text-center mx-auto mt-2 sm:-mt-3 rounded-xl bg-[#73CA5C] px-6 py-4  text-sm font-medium z-50 fixed left-[50%] -translate-x-[50%]"
        />
      ) : (
        ""
      )}

      <section className="flex justify-center py-6 mt-8 sm:mt-28">
        <Link className="sm:block hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <form
          className="sm:mx-[78px] sm:w-[568px] w-[328px] flex flex-col justify-between duration-[1s] "
          onSubmit={handleEditProfile}
        >
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
              <div>
                <div className="w-full flex items-center justify-center ">
                  <div
                    className="w-[96px] h-[96px] bg-purple-100 rounded-xl flex items-center justify-center mb-3 cursor-pointer overflow-hidden"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    {getUser.url !== null ? (
                      <img src={getUser.url} alt="" />
                    ) : (
                      <AiOutlineCamera className="text-purple-700 text-2xl" />
                    )}
                  </div>
                </div>
                {submitted && images.length === 0 ? (
                  <p className="text-[#FA2C5A] text-xs mt-1 text-center">
                    Foto harus diisi kembali!
                  </p>
                ) : (
                  ""
                )}
                <div className="flex mb-3">
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
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Nama*</label>
            <input
              type="text"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs "
              defaultValue={nama}
              name="full_name_user"
              onChange={(e) => setUsername(e.target.value)}
              id="username"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Kota*</label>
            <select
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              defaultValue={getUser.city}
              onChange={(e) => setCity(e.target.value)}
              id="city"
            >
              {render}
              <option selected hidden>
                Pilih kota
              </option>
              <option defaultValue="jakarta">Jakarta</option>
              <option defaultValue="bandung">Bandung</option>
              <option defaultValue="surabaya">Surabaya</option>
              <option defaultValue="bali">Bali</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Alamat*</label>
            <textarea
              type="textarea"
              placeholder="Contoh Jl Ikan Hiu 33"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[80px] px-4 text-xs pt-3"
              defaultValue={getUser.address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">No Handphone*</label>
            <input
              type="text"
              placeholder="Contoh: +628123456789"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              defaultValue={getUser.phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
            />
          </div>
          <button
            type="submit"
            className="h-[48px]  bg-purple-700 text-white rounded-2xl mt-5 font-medium"
          >
            {userUpdateStatus === "loading" ? (
              <div className="flex mx-auto justify-center">
                <BeatLoader color="#ffffff" margin={4} size={12} />
              </div>
            ) : (
              "Simpan"
            )}
          </button>
        </form>
        <div className="sm:w-[24px] w-0" />
      </section>
    </div>
  );
};

export default InfoProfile;
