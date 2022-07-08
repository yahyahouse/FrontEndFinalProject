import React, { useEffect } from "react";
import "../assets/css/home.css";
import { Tabs } from "antd";
import Banner from "../components/Banner";
import CardProduct from "../components/CardProduct";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Pagination } from "antd";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllDataProducts } from "../features/productSlice";

const { TabPane } = Tabs;

const Home = () => {
  const [category, setCategory] = useState("");
  console.log(category);

  const dispatch = useDispatch();
  const allProducts = useSelector(getAllDataProducts);
  console.log(allProducts, "di home");

  // mengambil value tab kategori active
  const onChange = (key) => {
    console.log(key);
    setCategory(key);
  };

  // mengambil value dari pagination yang active
  const handlePaginationChange = (page) => {
    console.log(page);
  };

  useEffect(() => {
    dispatch(
      getAllProducts({
        productName: "",
        productCategory: category,
        page: 1,
        size: 12,
      })
    );
  }, [dispatch, category]);
  return (
    <div>
      <NavigationBar />
      <div className="banner">
        <Banner />
      </div>
      <div className="w-full md:px-[136px] mt-10 min-h-screen">
        <div className="px-4 mt-[228px] md:mt-2">
          <div className="category-product">
            <h3 className="text-base font-bold -mb-5 md:mb-4">
              Telusuri Category
            </h3>

            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Semua
                  </span>
                }
                key=""
              >
                <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 md:mt-2">
                  {allProducts.products &&
                    allProducts.products.map((item) => (
                      <CardProduct
                        cardWidth={"182px"}
                        key={item.productId}
                        data={item}
                      />
                    ))}
                </div>
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Hobi
                  </span>
                }
                key="Hobi"
              >
                <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 md:mt-2">
                  {allProducts.products &&
                    allProducts.products.map((item) => (
                      <CardProduct
                        cardWidth={"182px"}
                        key={item.productId}
                        data={item}
                      />
                    ))}
                </div>
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Kendaraan
                  </span>
                }
                key="Kendaraan"
              >
                <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 md:mt-2">
                  {allProducts.products &&
                    allProducts.products.map((item) => (
                      <CardProduct
                        cardWidth={"182px"}
                        key={item.productId}
                        data={item}
                      />
                    ))}
                </div>
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Fashion
                  </span>
                }
                key="Fashion"
              >
                <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 md:mt-2">
                  {allProducts.products &&
                    allProducts.products.map((item) => (
                      <CardProduct
                        cardWidth={"182px"}
                        key={item.productId}
                        data={item}
                      />
                    ))}
                </div>
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Elektronik
                  </span>
                }
                key="Elektronik"
              >
                <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 md:mt-2">
                  {allProducts.products &&
                    allProducts.products.map((item) => (
                      <CardProduct
                        cardWidth={"182px"}
                        key={item.productId}
                        data={item}
                      />
                    ))}
                </div>
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Kesehatan
                  </span>
                }
                key="Kesehatan"
              >
                <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 md:mt-2">
                  {allProducts.products &&
                    allProducts.products.map((item) => (
                      <CardProduct
                        cardWidth={"182px"}
                        key={item.productId}
                        data={item}
                      />
                    ))}
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
      <Pagination
        className="mt-12 pb-28 flex justify-center"
        defaultCurrent={1}
        total={1000}
        onChange={handlePaginationChange}
      />
      <Link to="/infoproduk">
        <button className="bg-purple-700 px-7 py-4 flex items-center gap-2 rounded-xl text-white text-sm font-normal mt-4 mx-auto fixed bottom-7 left-[50%] -translate-x-[50%] drop-shadow-[0_0_10px_rgba(0, 0, 0, 0.15)]">
          <FiPlus className="text-white text-xl font-bold" />
          Jual
        </button>
      </Link>
    </div>
  );
};

export default Home;
