import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`button ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
