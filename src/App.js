import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import News from "./components/News/News";

function App() {
  return (
    <div className="app">
      <Header />

      {/*App Body*/}
      <div className="app__body">
        <Sidebar></Sidebar>
        <Content></Content>
        <News></News>
      </div>
      {/*Sidepanel Component*/}
      {/*Main Section*/}
      {/*News Component*/}

      {/*Footer Component*/}
    </div>
  );
}

export default App;
