import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import InfoPenawar from "../pages/InfoPenawar";
import InfoProduk from "../pages/InfoProduk";
import InfoProfile from "../pages/InfoProfile";
import Login from "../pages/Login";
import DaftarJual from "../pages/DaftarJual";
import Notifikasi from "../pages/Notifikasi";
import UserAccount from "../pages/UserAccount";
import Register from "../pages/Register";
import SettingAccount from "../pages/SettingAccount";
import DetailProduk from "../pages/DetailProduk";
import BuyerDetail from "../pages/BuyerDetail";
import ModalDetailProduk from "../components/ModalDetailProduk";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infoprofile" element={<InfoProfile />} />
        <Route path="/infoproduk" element={<InfoProduk />} />
        <Route path="/infopenawar" element={<InfoPenawar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftarJual" element={<DaftarJual />} />
        <Route path="/notifikasi" element={<Notifikasi />}></Route>
        <Route path="/userAccount" element={<UserAccount />}></Route>
        <Route path="/settingaccount" element={<SettingAccount />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/detailproduk" element={<DetailProduk />} />
        <Route path="/buyerdetail" element={<BuyerDetail />} />
        <Route path="/modaldetail" element={<ModalDetailProduk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
