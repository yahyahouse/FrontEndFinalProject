import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import InfoProduk from "../pages/InfoProduk";
import InfoProfile from "../pages/InfoProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infoprofile" element={<InfoProfile />} />
        <Route path="/infoproduk" element={<InfoProduk />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
