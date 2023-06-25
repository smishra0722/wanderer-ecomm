import React, { useContext, useEffect } from "react";
import "../Validation/style.css";
import { ApiContext } from "../../ApiContext/AllContextApi";
import { useAuth } from "../Firebase/fire";
import Test from "../../Components/TestCompo/Test";

function Validation() {
  const {
    emailRef,
    passwordRef,
    handleSignUp,
    loading,
    setLoading,
    user,
    setUser,
    hasAccount,
    sethasAccount,
    emailError,
    passwordError,
    handleLogIn,
    email,
    setEmail,
  } = useContext(ApiContext);
  const users = useAuth();

  return (
    <>
      <div className="valid-main">
        <div className="image-valid">
          <img className="image_valid" src="clothing.jpg" alt="" />
        </div>
        <div className="valid">
          <h3>
            Welcome to <span>Wanderer</span>
          </h3>
          <input
            name="email"
            placeholder="UserName"
            type="text"
            required
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <input
            name="password"
            type="password"
            placeholder="Password Should be 6 character long"
            required
            ref={passwordRef}
            onKeyPress={(e) => e.key === "Enter" && handleLogIn}
          />
          <p className="errorMsg">{passwordError}</p>
          {hasAccount ? (
            <>
              <button
                disabled={loading || users}
                onKeyPress={(e) => e.key === "Enter" && handleLogIn}
                onClick={handleLogIn}
              >
                Login
              </button>
              <div className="valid-span">
                <span>Don't Have an account? </span>
                <span
                  className="up-in"
                  onClick={() => sethasAccount(!hasAccount)}
                >
                  Sign Up
                </span>
              </div>
            </>
          ) : (
            <>
              <button
                disabled={loading || users}
                onKeyPress={(e) => e.key === "Enter" && handleSignUp}
                onClick={handleSignUp}
              >
                Sign up
              </button>
              <div className="valid-span">
                <span>Have an account? </span>
                <span
                  className="up-in"
                  onClick={() => sethasAccount(!hasAccount)}
                >
                  Login
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Validation;
