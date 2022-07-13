import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, detailUser, userEdit } from "../features/userSlice";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";

// import Camera from "../assets/img/fi_camera.svg";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import NavigationBar from "../components/NavigationBar";

const InfoProfile = () => {
  // GET_API START
  const dispatch = useDispatch();
  const getUser = useSelector(detailUser);
  const [users] = useState(JSON.parse(localStorage.getItem("user")));
  console.log("userid dari info profile ", users.userId);
  useEffect(() => {
    dispatch(getUserById(users.userId));
  }, [dispatch]);
  // GET_API END
  // IMAGE_UPLOADING START
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  // IMAGE_UPLOADING END
  // GET_DATA START
  const [newData, setNewData] = useState({
    userName: getUser.username,
    city: getUser.city,
    address: getUser.address,
    phone: getUser.phone,
  });

  console.log(newData, "data edit in form");

  const handleInputNewData = (e) => {
    setNewData({
      ...newData,
      [e.target.id]: e.target.value,
    });
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", images[0].file);
    console.log(images[0].file, "test");
    data.append("username", newData.userName);
    data.append("city", newData.city);
    data.append("address", newData.address);
    data.append("phone", newData.phone);
    try {
      let response = await dispatch(userEdit(data));
      console.log(response, "berhasil");
    } catch (error) {
      console.error(error.message, "gagal");
    }
  };

  // GET_DATA END
  return (
    <div>
      <NavigationBar />
      <section className="flex justify-center py-6">
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
                    {/* <img className="z-50" src={Camera} alt="plus" /> */}
                    <img src={getUser.url} alt="" />
                  </div>
                </div>
                <div className="flex ">
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
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              value={newData.userName}
              name="username"
              onChange={handleInputNewData}
              id="userName"
            />
          </div>
          {/* <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Kota*</label>
            <select
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              value={newData.city}
              onChange={handleInputNewData}
              id="city"
            >
              <option value="coba">{newData.city} test</option>
            </select>
          </div> */}
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Alamat*</label>
            <textarea
              type="textarea"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[80px] px-4 text-xs"
              placeholder={newData.address}
              value={newData.address}
              onChange={handleInputNewData}
              id="address"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">No Handphone*</label>
            <input
              type="text"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              placeholder={newData.phone}
              value={newData.phone}
              onChange={handleInputNewData}
              id="phone"
            />
          </div>
          <button
            type="submit"
            className="h-[48px]  bg-purple-700 text-white rounded-2xl mt-5 font-medium"
          >
            Simpan
          </button>
        </form>
        <div className="sm:w-[24px] w-0" />
      </section>
    </div>
  );
};

export default InfoProfile;
