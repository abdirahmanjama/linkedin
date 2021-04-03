import React from "react";
import "./HeaderOptions.css";

function HeaderOptions({ Title, Icon, avatar }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__Icon" />}
      <h3 className="headerOptions__title">{Title} </h3>
    </div>
  );
}

export default HeaderOptions;
