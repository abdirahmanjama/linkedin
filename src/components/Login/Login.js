import React, { useState } from "react";
import { auth } from "../Content/Firebase";
import "./Login.css";
import logo from "./Logo.png";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const login = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <img src={logo} alt="logo" />

      <form>
        <input
          placeholder="Full name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Profile Picture"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        ></input>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <button type="submit" onClick={register}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
