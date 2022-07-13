import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBuyerOfferHistory,
  getBuyerOfferHistoryData,
  getBuyerOfferHistoryStatus,
  getSellerOfferHistory,
  getSellerOfferHistoryData,
  getSellerOfferHistoryStatus,
} from "../features/offerSlice";
import productImage from "../assets/img/notifImage.png";
import moment from "moment";
import { EmptyData } from "./EmptyData";

const ModalNotifikasi = ({
  width,
  position,
  shadow,
  rounded,
  paddingX,
  marginT,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const user =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : "";

  const buyerOfferHistory = useSelector(getBuyerOfferHistoryData);
  const buyerGetOfferStatus = useSelector(getBuyerOfferHistoryStatus);
  const sellerOfferHistory = useSelector(getSellerOfferHistoryData);
  const sellerGetOfferStatus = useSelector(getSellerOfferHistoryStatus);
  console.log(buyerOfferHistory);
  console.log(sellerOfferHistory);
  console.log(buyerGetOfferStatus);
  console.log(sellerGetOfferStatus);

  useEffect(() => {
    dispatch(getBuyerOfferHistory(user.userId));
    dispatch(getSellerOfferHistory({ userId: user.userId }));
  }, [dispatch, user.userId]);

  return location.pathname === "/" ||
    location.pathname.includes("buyerdetail") ? (
    <div
      className={`py-4 bg-white md:px-[${paddingX}] md:mt-[${marginT}] rounded-${rounded} shadow-[${shadow}] [&>div:last-child>div>div]:border-none`}
    >
      {buyerOfferHistory &&
        buyerOfferHistory.map((item) => (
          <div className="hover:bg-gray-500 cursor-pointer">
            <div className="px-4 pt-4">
              <div
                className={`flex gap-12 w-${width} justify-between border-b border-gray-500 pb-4`}
              >
                <div className="flex gap-4">
                  <div>
                    <img
                      src={item.url[0]}
                      alt="productImage"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-900">
                      Penawaran produk
                    </p>
                    <h3 className="mt-1 text-sm font-normal text-black">
                      {item.productName}
                    </h3>
                    <h3 className="mt-1 text-sm font-normal text-black">
                      Rp {item.productPrice}
                    </h3>
                    <h3 className="mt-1 text-sm font-normal text-black">
                      Ditawar Rp {item.offerPrice}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-2">
                  <p className="text-[10px] text-gray-900">
                    {" "}
                    {moment
                      .utc(item.localDateTime)
                      .local()
                      .format("MMMM DD, hh:mm")}
                  </p>
                  <div className="w-2 h-2 rounded bg-[#FA2C5A] mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  ) : (
    <div
      className={`py-4 bg-white md:px-[${paddingX}] md:mt-[${marginT}] rounded-${rounded} shadow-[${shadow}] [&>div:last-child>div>div]:border-none`}
    >
      {sellerOfferHistory &&
        sellerOfferHistory.map((item) => (
          <div className={item.userId === user.userId ? "hidden" : "block"}>
            <Link to={`/infopenawar/${item.productId}/${item.offerId}`}>
              <div className="hover:bg-gray-500 cursor-pointer">
                <div className="px-4 pt-4">
                  <div
                    className={`flex gap-12 w-${width} justify-between border-b border-gray-500 pb-4`}
                  >
                    <div className="flex gap-6">
                      <div>
                        <img
                          src={item.url[0]}
                          alt="productImage"
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-900">
                          Penawaran produk
                        </p>
                        <h3 className="mt-1 text-sm font-normal text-black">
                          {item.productName}
                        </h3>
                        <h3 className="mt-1 text-sm font-normal text-black">
                          Rp {item.productPrice}
                        </h3>
                        <h3 className="mt-1 text-sm font-normal text-black">
                          Ditawar Rp {item.offerPrice}
                        </h3>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <p className="text-[10px] text-gray-900">
                        {" "}
                        {moment
                          .utc(item.localDateTime)
                          .local()
                          .format("MMMM DD, hh:mm")}
                      </p>
                      <div className="w-2 h-2 rounded bg-[#FA2C5A] mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ModalNotifikasi;
