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
        : "200px",
    height: props.size === "sm" ? "45px" : "lg" ? "53px" : "53px",
    fontSize: props.size === "lg" ? "16px" : "sm" ? "18px" : "18px",
    fontWeight: props.size === "sm" ? "600" : "600",
    transition: "background-color 0.4s, color 0.4s, border 0.4s",
  };
  // const hoverStyle = {
  //   backgroundColor: props.variant === "fill" ? "#1E4C2F" : "transparent",
  //   color: props.variant === "fill" ? "white" : "#1E4C2F",
  //   border: props.variant === "outline" ? "0px" : "1px solid #1E4C2F",
  // };
  return (
    <>
      <button
        style={buttonStyle}
        // onMouseEnter={(e) => {
        //   e.target.style.backgroundColor = hoverStyle.backgroundColor;
        //   e.target.style.color = hoverStyle.color;
        //   e.target.style.border = hoverStyle.border;
        // }}
        // onMouseLeave={(e) => {
        //   e.target.style.backgroundColor = buttonStyle.backgroundColor;
        //   e.target.style.color = buttonStyle.color;
        //   e.target.style.border = buttonStyle.border;
        // }}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
