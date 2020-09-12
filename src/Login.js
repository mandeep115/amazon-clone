import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <button
            onClick={prevent}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <button onClick={prevent} className="login__registerButton">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
