import React from "react";
import NavigationBar from "../components/NavigationBar";
import ModalNotifikasi from "../components/ModalNotifikasi";

const Notifikasi = () => {
  return (
    <div className="px-2">
      <NavigationBar />
      <ModalNotifikasi width={"full"} marginT={"120px"} paddingX={"236px"} />
    </div>
  );
};

export default Notifikasi;
