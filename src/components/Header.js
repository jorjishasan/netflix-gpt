import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-10">
      <img className="mx-auto w-44" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
