import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import InfoProduk from "../pages/InfoProduk";
import InfoProfile from "../pages/InfoProfile";
import Login from "../pages/Login";
import DaftarJual from "../pages/DaftarJual";
import Notifikasi from "../pages/Notifikasi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infoprofile" element={<InfoProfile />} />
        <Route path="/infoproduk" element={<InfoProduk />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftarJual" element={<DaftarJual />} />
        <Route path="/notifikasi" element={<Notifikasi />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
