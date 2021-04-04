import React from "react";
import "./HeaderOptions.css";
import FaceIcon from "@material-ui/icons/Face";

function HeaderOptions({ Title, Icon, avatar }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__Icon" />}
      {avatar && <FaceIcon className="headerOption__Icon" src={avatar} />}
      <h3 className="headerOptions__title">{Title} </h3>
    </div>
  );
}

export default HeaderOptions;
