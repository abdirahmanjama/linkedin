import React, { useState } from "react";
import { auth } from "../Content/Firebase";
import "./Login.css";
import logo from "./Logo.png";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(
            dispatch(
              login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img src={logo} alt="logo"></img>

      <form>
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Pic"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <span className="login__register" onClick={register}>
          Register now!
        </span>
      </p>
    </div>
  );
}

export default Login;
