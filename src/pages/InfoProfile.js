import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, detailUser } from "../features/userSlice";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";

import Camera from "../assets/img/fi_camera.svg";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import NavigationBar from "../components/NavigationBar";

const InfoProfile = () => {
  const dispatch = useDispatch();
  const getUser = useSelector(detailUser);
  console.log(getUser);
  console.log("cobain");

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  //  handlevalue input
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // const [newData, setNewData] = useState({
  //   firstName: users.first_name,
  //   lastName: users.last_name,
  //   email: users.email,
  // });

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
      <section className="flex justify-center py-6">
        <Link className="sm:block hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <form className="sm:mx-[78px] sm:w-[568px] w-[328px] flex flex-col justify-between duration-[1s] ">
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
                    className="w-[96px] h-[96px] bg-purple-100 rounded-xl flex items-center justify-center mb-3 cursor-pointer"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <img className="z-50" src={Camera} alt="plus" />
                  </div>
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
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Nama*</label>
            <input
              type="text"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              value={getUser.username}
              name="username"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Kota*</label>
            <select className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs">
              <option value={getUser.city}>{getUser.city}</option>
              <option value="Bandung">Bandung</option>
              <option value="Bekasi">Bekasi</option>
              <option value="Surabaya">Surabaya</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Alamat*</label>
            <textarea
              type="textarea"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[80px] px-4 text-xs"
              placeholder={getUser.address}
              value={getUser.address}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">No Handphone*</label>
            <input
              type="text"
              className="text-black border border-solid border-[#D0D0D0] placeholder:text-gray-900 placeholder:text-sm rounded-2xl h-[48px] px-4 text-xs"
              placeholder={getUser.phone}
              value={getUser.phone}
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
