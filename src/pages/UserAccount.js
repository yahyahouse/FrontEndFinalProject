import React from "react";
import NavigationBar from "../components/NavigationBar";
import DropdownAccount from "../components/DropdownAccount";

const UserAccount = () => {
  return (
    <div className="px-2">
      <NavigationBar />
      <DropdownAccount />
    </div>
  );
};

export default UserAccount;
