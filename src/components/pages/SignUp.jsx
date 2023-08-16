import React from "react";
import MYButton from "src/components/Button";
import Form from "src/components/Form";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h5 className="modal-title">Sign Up</h5>
      <div className="sign-up-forms ">
        <Form className label="Name" holder="Enter your name" type="text" />
        <Form
          className
          label="Phone Number or Email"
          holder="Enter your phone number or email"
          type="text"
        />
        <Form
          className
          label="Password"
          holder="Enter your password"
          type="text"
        />
      </div>
      <a className="forgot-pswrd" href="#">
        Getting Trouble?
      </a>
      <div className="button-box">
        <MYButton text="Sign Up" variant="outline" size="lg" />
      </div>

      <div className="other-method">
        <div className="line"></div>
        <p>Or using other method</p>
        <div className="line"></div>
      </div>
      <button className="sign-in-fb-btn">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1454 14.8745L17.5443 12.342H15.0868V10.6959C15.0868 10.0034 15.4299 9.32674 16.527 9.32674H17.66V7.17015C17.0002 7.06503 16.3335 7.00816 15.6653 7C13.6427 7 12.3221 8.21481 12.3221 10.411V12.342H10.0801V14.8745H12.3221V21H15.0868V14.8745H17.1454Z"
            fill="#337FFF"
          />
        </svg>
        Sign up with Facebook
      </button>
    </div>
  );
};

export default SignUp;
