import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productImage from "../assets/img/notifImage.png";
import {
  getProductBySeller,
  getSellerProductSoldData,
  getSellerProductSoldStatus,
} from "../features/productSlice";
import { SyncLoader } from "react-spinners";

export const ProdukTerjual = () => {
  const dispatch = useDispatch();

  const user =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : "";

  const sellerProductSold = useSelector(getSellerProductSoldData);
  console.log(sellerProductSold);
  const sellerProductSoldStatus = useSelector(getSellerProductSoldStatus);
  console.log(sellerProductSoldStatus);

  useEffect(() => {
    // dispatch(getSellerProductSold(user.userId));
    // dispatch(getSellerProductSold({ userId: user.userId }));
    dispatch(getProductBySeller(user.userId));
  }, [dispatch, user.userId]);

  return (
    <div>
      {sellerProductSoldStatus === "loading" ? (
        <div className="flex mx-auto mt-32 justify-center">
          <SyncLoader color="#7126B5" margin={2} size={12} />
        </div>
      ) : (
        <div className="px-4 pt-4">
          <div
            className={`flex gap-12 w-full justify-between border-b border-gray-500 pb-4`}
          >
            <div className="flex gap-6">
              <div>
                <img
                  src={
                    sellerProductSold ? sellerProductSold[0].url : productImage
                  }
                  alt="productImage"
                  className="w-12 h-12 rounded-xl object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] text-gray-900">Penawaran produk</p>
                <h3 className="mt-1 text-sm font-normal text-black">
                  {sellerProductSold
                    ? sellerProductSold[0].productName
                    : "JAm Tangan"}
                </h3>
                <h3 className="mt-1 text-sm font-normal text-black">
                  Rp{" "}
                  {sellerProductSold
                    ? sellerProductSold[0].productPrice
                    : "500000"}
                </h3>
                <h3 className="mt-1 text-sm font-normal text-black">
                  Ditawar Rp 100000
                </h3>
              </div>
            </div>

            <div className="flex gap-2">
              <p className="text-[10px] text-gray-900">Terjual</p>
              <div className="w-2 h-2 rounded bg-purple-700 mt-1"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
