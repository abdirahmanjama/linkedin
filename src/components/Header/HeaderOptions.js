import React from "react";
import "./HeaderOptions.css";

function HeaderOptions({ Title, Icon, Avatar }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__Icon" />}
      {Avatar && <Avatar className="headerOptions__Icon" src={Avatar} />}

      <h3 className="headerOptions__title">{Title} </h3>
    </div>
  );
}

export default HeaderOptions;
