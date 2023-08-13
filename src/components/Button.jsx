import React from "react";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.variant === "fill" ? "#1E4C2F" : "transparent",
    border: props.variant === "outline" ? "1px solid #1E4C2F" : "none",
    color: props.variant === "fill" ? "white" : "#1E4C2F",
    borderRadius: props.size === "sm" ? "8px" : "8px",
    width:
      props.size === "xs"
        ? "120px"
        : props.size === "sm"
        ? "122px"
        : props.size === "lg"
        ? "100%"
        : "53px",
    height: props.size === "sm" ? "45px" : "lg" ? "48px" : "53px",
    fontSize: props.size === "lg" ? "16px" : "sm" ? "18px" : "18px",
    fontWeight: props.size === "sm" ? "600" : "600",
  };
  return (
    <>
      <button style={buttonStyle}>{props.text}</button>
    </>
  );
};

export default Button;
