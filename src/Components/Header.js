import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [auth, setAuth] = useState("Login")
  const authHandler = () => {
    auth === 'Login' ? setAuth('Logout') : setAuth('Login')
  }
  return (
    <div className="logo-container">
      <div>
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="ul-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="auth-btn" onClick={authHandler}>{auth}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header
