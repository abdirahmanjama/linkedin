import React from "react";
import "./InputOption.css";
function InputOption({ Icon, Title, color }) {
  return (
    <div>
      <div className="inputOption">
        <Icon style={{ color }} />
        <h4>{Title}</h4>
      </div>
    </div>
  );
}

export default InputOption;
