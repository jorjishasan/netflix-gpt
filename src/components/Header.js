import React from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleAiSearchComponent } from "../redux/aiSearchSlice";
import lang from "../config/languages";
import { switchLanguage } from "../redux/langSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const showAiSearchComponent = useSelector(
    (store) => store.aiSearch.showAiSearchComponent,
  );

  const dispatch = useDispatch();
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

  const handleAiSearchComponent = () => {
    dispatch(toggleAiSearchComponent());
  };

  const handleDropDown = (event) => {
    dispatch(switchLanguage(event.target.value));
  };
  return (
    <div className="absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-black">
      <img className="mx-auto w-44 md:mx-0" src={LOGO} alt="logo" />
      {user ? (
        <div className="flex items-center justify-between gap-3">
          {showAiSearchComponent && (
            <select
              id="dropdown"
              name="options"
              className="m-2 bg-gray-900 p-2 text-white"
              onChange={handleDropDown}
            >
              {Object.keys(lang).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          )}

          <button
            className="rounded-xl bg-purple-800 px-4 py-2 text-lg text-white"
            onClick={handleAiSearchComponent}
          >
            GPT Search ✨
          </button>
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
