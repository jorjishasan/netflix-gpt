import React, { useRef, useState } from "react";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // SignIn & SignUp Logic
    if (isSignInForm) {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode, "+", errorMessage);
          // ..
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-[100vh]">
      <div className="absolute">
        <img className="min-h-full" alt="logo" src={BG_URL} />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0 mx-auto my-36 w-1/2 bg-black bg-opacity-70 p-12 text-white"
      >
        <h1 className="py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 w-full bg-gray-700 p-4"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="my-4 w-full bg-gray-700 p-4"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="my-4 w-full bg-gray-700 p-4"
        />
        <p className="font-bold text-red-500">{errorMessage}</p>
        <button
          className="my-4 w-full rounded bg-red-700 p-4"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already register ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
