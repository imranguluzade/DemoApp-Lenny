import { React, useState, useContext } from "react";
import MYButton from "src/components/Button/Button";
import Form from "src/components/Form/Form";
import { modalContext } from "src/context/ModalProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storeUser } from "src/helper";

const initialUser = { password: "", identifier: "" }

const SignIn = () => {
  const { isLogin, setIsLogin, setIsModalOpen, setIsAuth } = useContext(modalContext);
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const action = () => {
    setIsLogin(false)
  }

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }))
  };

  const handleLogin = async () => {
    try {
      const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL
        }/api/auth/local`
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);
          setIsModalOpen(false);
          setIsAuth(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="sign-in-container">
      <h5 className="modal-title">Sign In</h5>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        <Form
          label="Email"
          holder="Enter your Email"
          type="email"
          name="identifier"
          value={user.identifier}
          onChange={handleUserChange}
        />
        <Form
          label="Password"
          holder="Enter your password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleUserChange}
        />
        <a className="forgot-pswrd" href="#">
          Getting Trouble?
        </a>
        <div className="button-box">
          <MYButton text="Sign In" variant="fill" size="xl" />
          {isLogin && (
            <MYButton
              text="Sign Up"
              variant="outline"
              size="xl"
              action={action}
            />
          )}
        </div>
      </form>

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
        Sign in with Facebook
      </button>
    </div>
  );
};

export default SignIn;
