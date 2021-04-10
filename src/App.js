import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import { auth } from "./components/Content/Firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //persistant login with firebase

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //log user out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Content></Content>

          <News></News>
        </div>
      )}
      0{/* {!user ? <Login/> : */}
      {/*Sidepanel Component*/}
      {/*Main Section*/}
      {/*News Component*/}
      {/*Footer Component*/}
    </div>
    // ) }
  );
}

export default App;
