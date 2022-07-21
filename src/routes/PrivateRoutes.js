import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth =
    localStorage.getItem("token") !== null
      ? JSON.parse(localStorage.getItem("token"))
      : "";
  console.log(auth);
  return auth !== "" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
