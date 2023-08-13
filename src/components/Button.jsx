import React from "react";

export const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.variant === "fill" ? "#1E4C2F" : "transparent",
    border: props.variant === "outline" ? "1px solid #1E4C2F" : "none",
    color: props.variant === "fill" ? "white" : "#1E4C2F",
    borderRadius: props.size === "sm" ? "8px" : "8px",
    width:
      props.size === "xs" ? "120px" : props.size === "sm" ? "122px" : "53px",
    height: props.size === "sm" ? "45px" : "53px",
    fontSize: props.size === "sm" ? "18px" : "18px",
    fontWeight: props.size === "sm" ? "600" : "600",
  };
  return (
    <div>
      <button style={buttonStyle}>{props.text}</button>
    </div>
  );
};
