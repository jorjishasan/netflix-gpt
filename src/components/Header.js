import React from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-black">
      <img className="mx-auto w-44 md:mx-0" src={LOGO} alt="logo" />
      {user ? (
        <div className="flex items-center justify-between gap-3">
          <img
            className="h-11 w-11 rounded-full object-cover"
            src={user.photoURL}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="whitespace-nowrap">
            {"Sign Out"}
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/")}
          className="border-1 mr-3 h-12 rounded-lg bg-red-600 px-8 font-semibold tracking-wide text-white"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
