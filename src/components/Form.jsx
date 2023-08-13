import React from "react";

const Form = (props) => {
  return (
    <div className="input-form-container">
      <label className="input-heading">{props.label}</label>
      <input
        className="form-input"
        type={props.type}
        placeholder={props.holder}
      />
    </div>
  );
};

export default Form;
