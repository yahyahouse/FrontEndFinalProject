import React from "react";
import cardImage from "../assets/img/card-image.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/productSlice";

const CardProduct = ({ cardWidth, data }) => {
  console.log(data);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleDeleteProduct = async () => {
    try {
      await dispatch(deleteProduct({ productId: data.productId }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`group w-full sm:w-[${cardWidth}]`}>
      <div
        className={`shadow-[0_0_4px_rgba(0,0,0,0.15)] px-2 pt-2 pb-4 w-full sm:w-[${cardWidth}]`}
      >
        <div>
          {location.pathname === "/" && data ? (
            <Link to={{ pathname: `detailproduk/${data.productId}` }}>
              {data && data.url ? (
                <img
                  src={data.url}
                  alt="cardImage"
                  className={`w-[180px] h-[100px] object-cover rounded`}
                />
              ) : (
                <img
                  src={cardImage}
                  alt="cardImage"
                  className="w-[190px] h-[100px] object-cover rounded"
                />
              )}
            </Link>
          ) : (
            ""
          )}
          {location.pathname === "/daftarJual" && data ? (
            <Link
              to={{ pathname: `/updateproduk/${data.productId}` }}
              state={{
                productName: data.productName,
                productPrice: data.productPrice,
                productCategory: data.productCategory,
                productDescription: data.productDescription,
              }}
            >
              {data && data.url ? (
                <img
                  src={data.url}
                  alt="cardImage"
                  className={`w-[190px] h-[100px] object-cover rounded`}
                />
              ) : (
                <img
                  src={cardImage}
                  alt="cardImage"
                  className="w-[190px] h-[100px] object-cover rounded"
                />
              )}
            </Link>
          ) : (
            ""
          )}
          <h3 className="mt-2 text-sm font-normal text-black">
            {data ? data.productName : "Jam"}
          </h3>
          <p className="mt-1 text-[10px] font-normal text-gray-900">
            {data ? data.productCategory : "Aksesoris"}
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="mt-2 text-sm font-normal">
              {data ? data.productPrice : "200000"}
            </h3>
          </div>
          <div className="self-end align-bottom">
            {location.pathname === "/daftarJual" && data ? (
              <div className="flex gap-1">
                <Link
                  to={{ pathname: `/updateproduk/${data.productId}` }}
                  state={{
                    productName: data.productName,
                    productPrice: data.productPrice,
                    productCategory: data.productCategory,
                    productDescription: data.productDescription,
                  }}
                >
                  <button className="py-1 px-2 text-white rounded-xl bg-purple-700 text-xs">
                    Ubah
                  </button>
                </Link>
                <button
                  onClick={handleDeleteProduct}
                  className="py-1 px-2 text-white rounded-xl bg-[#FA2C5A] text-xs"
                >
                  Hapus
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
