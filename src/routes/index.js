import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Modal from "../components/ModalStatus";
import Home from "../pages/Home";
import InfoPenawar from "../pages/InfoPenawar";
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
        <Route path="/infopenawar" element={<InfoPenawar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
