import React from "react";
import CardProduct from "../components/CardProduct";

const Home = () => {
  return (
    <div className="w-full px-[136px] grid grid-cols-6 justify-between">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  );
};

export default Home;
