import React, { useEffect, useState } from "react";
import "../assets/css/daftarJual.css";
import { Alert } from "antd";
import NavigationBar from "../components/NavigationBar";
import sellerProfile from "../assets/img/sellerProfile.png";
import { Tabs } from "antd";
import { FiBox, FiHeart, FiDollarSign, FiChevronRight } from "react-icons/fi";
import CardProduct from "../components/CardProduct";
import ModalNotifikasi from "../components/ModalNotifikasi";
import { EmptyData } from "../components/EmptyData";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductBySeller,
  getAddProductStatus,
  getSellerProducts,
} from "../features/productSlice";

const { TabPane } = Tabs;

const DaftarJual = () => {
  const dispatch = useDispatch();
  const sellerProducts = useSelector(getSellerProducts);
  console.log(sellerProducts);
  const addProductstatus = useSelector(getAddProductStatus);
  console.log(addProductstatus);

  const seller =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : "";
  const [activeTab, setActiveTab] = useState("1");

  const onClose = (e) => {
    console.log(e, "I was closed.");
  };

  const handleActiveTab = (activeKey) => {
    setActiveTab(activeKey);
  };

  useEffect(() => {
    dispatch(getProductBySeller(seller.userId));
  }, [dispatch, seller.userId]);

  // Tabs untuk dekstop view
  const customDekstopTabPane = ({
    cardTitle,
    key,
    title,
    icon,
    navRight,
    content,
  }) => (
    <TabPane
      key={key}
      tab={
        <>
          {cardTitle ? (
            <h4 className="text-start text-base font-medium mb-6">
              {cardTitle}
            </h4>
          ) : (
            ""
          )}
          <div className="flex items-center justify-between w-[200px] text-gray-900 hover:text-purple-700">
            <div className="flex items-center gap-4 text-gray-900 hover:text-purple-700">
              {icon}
              <p className="text-base font-normal">{title}</p>
            </div>
            {navRight}
          </div>
        </>
      }
    >
      {activeTab === "1" ? (
        <div className="grid grid-cols-3 justify-between gap-y-6">
          <Link to="/infoProduk">
            <button className="w-full sm:w-[206px] sm:h-[198px] flex justify-center items-center border-dashed border-2 rounded border-gray-700">
              <div className="text-gray-900">
                <FiPlus className="mx-auto text-2xl" />
                <span className="text-xs">Tambahkan Produk</span>
              </div>
            </button>
          </Link>
          {sellerProducts &&
            sellerProducts.map((item) => (
              <CardProduct
                cardWidth={"206px"}
                key={item.productId}
                data={item}
              />
            ))}
        </div>
      ) : activeTab === "2" ? (
        <div>{content}</div>
      ) : activeTab === "3" ? (
        <div>{content}</div>
      ) : (
        ""
      )}
    </TabPane>
  );

  // tabs untuk mobile view
  const customMobileTabPane = ({ key, title, icon, content }) => (
    <>
      <TabPane
        tab={
          <span className="flex items-center gap-2">
            {icon}
            {title}
          </span>
        }
        key={key}
      >
        {activeTab === "1" ? (
          <div className="grid grid-cols-2 justify-between gap-5 mt-6">
            <Link to="/infoProduk">
              <button className="w-full h-[198px] flex justify-center items-center border-dashed border-2 rounded border-gray-700">
                <div className="text-gray-900">
                  <FiPlus className="mx-auto text-2xl" />
                  <span className="text-xs">Tambahkan Produk</span>
                </div>
              </button>
            </Link>
            {sellerProducts &&
              sellerProducts.map((item) => (
                <CardProduct
                  cardWidth={"206px"}
                  imgHeight={"120px"}
                  imgFit={"object-containt"}
                  key={item.productId}
                  data={item}
                />
              ))}
          </div>
        ) : activeTab === "2" ? (
          <div>{content}</div>
        ) : activeTab === "3" ? (
          <div className="mt-6">{content}</div>
        ) : (
          ""
        )}
      </TabPane>
    </>
  );

  return (
    <div className="pb-5">
      <NavigationBar />
      {addProductstatus === "Produk berhasil ditambahkan" ? (
        <Alert
          message={addProductstatus}
          type="success"
          closable
          onClose={onClose}
          className="w-[340px] sm:w-[500px] flex mx-auto mt-2 sm:-mt-3 rounded-xl bg-[#73CA5C] px-6 py-4  text-sm font-medium z-50 fixed left-[50%] -translate-x-[50%]"
        />
      ) : (
        ""
      )}
      <div className="px-2 mt-4 md:px-[236px] md:mt-[120px]">
        <h2 className="hidden md:block text-[20px] font-bold">
          Daftar Jual Saya
        </h2>
        <div className="w-full my-6 flex justify-between bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.15)] rounded-2xl items-center">
          <div className="flex gap-4 items-center">
            <img src={sellerProfile} alt="userProfile" width={48} height={48} />
            <div>
              <h4 className="text-sm font-medium">{seller.username}</h4>
              <p className="text-[10px] text-gray-900 mt-1">Kota</p>
            </div>
          </div>
          <button className="px-3 py h-[26px] border border-purple-700 rounded-lg font-medium text-xs">
            Edit
          </button>
        </div>
        {/* tabs dekstop view */}
        <div className="hidden md:block">
          <Tabs
            tabPosition={"left"}
            className="w-full"
            onChange={handleActiveTab}
          >
            {customDekstopTabPane({
              cardTitle: "Kategori",
              key: 1,
              title: "Semua Produk",
              icon: <FiBox className="text-xl" />,
              navRight: <FiChevronRight className="text-xl" />,
              content: <CardProduct cardWidth={"182px"} />,
            })}

            {customDekstopTabPane({
              key: 2,
              title: "Diminati",
              icon: <FiHeart className="text-xl" />,
              navRight: <FiChevronRight className="text-xl" />,
              content: <ModalNotifikasi width={"full"} rounded={"2xl"} />,
            })}

            {customDekstopTabPane({
              key: 3,
              title: "Terjual",
              icon: <FiDollarSign className="text-xl" />,
              navRight: <FiChevronRight className="text-xl" />,
              content: (
                <EmptyData message="Belum ada produkmu yang diminati nih" />
              ),
            })}
          </Tabs>
        </div>
        {/* tabs mobile view */}
        <div className="md:hidden mt-6">
          <Tabs defaultActiveKey="1" onChange={handleActiveTab}>
            {customMobileTabPane({
              key: 1,
              title: "Semua Produk",
              icon: <FiBox />,
              content: <CardProduct cardWidth={"182px"} />,
            })}
            {customMobileTabPane({
              key: 2,
              title: "Diminati",
              icon: <FiHeart />,
              content: <ModalNotifikasi rounded={"none"} />,
            })}
            {customMobileTabPane({
              key: 3,
              title: "Terjual",
              icon: <FiDollarSign />,
              content: (
                <EmptyData message="Belum ada produkmu yang diminati nih" />
              ),
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DaftarJual;
