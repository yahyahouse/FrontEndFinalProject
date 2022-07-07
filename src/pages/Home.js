import React, { useEffect } from "react";
import "../assets/css/home.css";
import { Tabs } from "antd";
import Banner from "../components/Banner";
import CardProduct from "../components/CardProduct";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Pagination } from "antd";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllDataProducts } from "../features/productSlice";

const { TabPane } = Tabs;

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(getAllDataProducts);
  console.log(allProducts, "di home");

  // mengambil value tab kategori active
  const onChange = (key) => {
    console.log(key);
  };

  // mengambil value dari pagination yang active
  const handlePaginationChange = (page) => {
    console.log(page);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <NavigationBar />
      <Banner />
      <div className="w-full md:px-[136px] mt-10">
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
                key="1"
              >
                <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 md:mt-2">
                  {allProducts &&
                    allProducts.map((item) => (
                      <CardProduct
                        cardWidth={"182px"}
                        imgHeight={"100px"}
                        imgFit={"object-contain"}
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
                key="2"
              >
                Content of Tab Pane 2
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Kendaraan
                  </span>
                }
                key="3"
              >
                Content of Tab Pane 3
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Fashion
                  </span>
                }
                key="4"
              >
                Content of Tab Pane 3
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Elektronik
                  </span>
                }
                key="5"
              >
                Content of Tab Pane 3
              </TabPane>
              <TabPane
                tab={
                  <span className="flex gap-2">
                    <FiSearch />
                    Kesehatan
                  </span>
                }
                key="6"
              >
                Content of Tab Pane 3
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
