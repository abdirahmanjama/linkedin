import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import News from "./components/News/News";
import Login from "./components/Login/Login";
function App() {
  const user = useSelector(selectUser);

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
      {/* {!user ? <Login/> : */}

      {/*Sidepanel Component*/}
      {/*Main Section*/}
      {/*News Component*/}
      {/*Footer Component*/}
    </div>
    // ) }
  );
}

export default App;
