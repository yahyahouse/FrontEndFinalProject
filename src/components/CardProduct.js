import React from "react";
import cardImage from "../assets/img/card-image.png";
import { Link } from "react-router-dom";

const cardProduct = ({ imgHeight, imgFit, cardWidth, data }) => {
  console.log(data);

  return (
    <div
      className={`shadow-[0_0_4px_rgba(0,0,0,0.15)] px-2 pt-2 pb-4 w-full  md:w-[${cardWidth}]]`}
    >
      <div>
        <Link to={{ pathname: `buyerdetail/${data.productId}` }}>
          {data && data.url.length > 0 ? (
            <img
              src={data.url}
              alt="cardImage"
              className={`w-full h-[${imgHeight}] ${imgFit} rounded`}
            />
          ) : (
            <img src={cardImage} alt="cardImage" className="w-full" />
          )}
        </Link>
      </div>
      <h3 className="mt-2 text-sm font-normal text-black">
        {data ? data.productName : "Jam"}
      </h3>
      <p className="mt-1 text-[10px] font-normal text-gray-900">
        {data ? data.productCategory : "Aksesoris"}
      </p>
      <h3 className="mt-2 text-sm font-normal">
        {data ? data.productPrice : "200000"}
      </h3>
    </div>
  );
};

export default cardProduct;
