import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let userName = email.split("@")[0];
    if (email.match(emailFormat) && password) {
      dispatch({
        type: "LOGIN_USER",
        user: userName,
      });
      console.log(userName);
      history.push("/");
    } else {
      alert("Enter a valid Email and password");
      console.error("Invalid email");
    }
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
          <input type="email" value={email} onChange={handelEmail} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handelPassword} />
          <button
            onClick={handelSubmit}
            type="submit"
            value="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={handelSubmit}
          value="submit"
          className="login__registerButton"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
