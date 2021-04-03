import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon></SearchIcon>
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} Title="Home"></HeaderOptions>
        <HeaderOptions
          Icon={SupervisorAccountIcon}
          Title="My Network"
        ></HeaderOptions>

        <HeaderOptions Icon={BusinessCenterIcon} Title="Jobs"></HeaderOptions>
        <HeaderOptions Icon={ChatIcon} Title="Chat"></HeaderOptions>
        <HeaderOptions
          Icon={NotificationsIcon}
          Title="Notifications"
        ></HeaderOptions>
      </div>
    </div>
  );
};

export default header;
