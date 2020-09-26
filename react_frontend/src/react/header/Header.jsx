import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__left">
        <div className="header__ppmt header__item">
          <Link to="/" className="header__link">
            Personal Project Managment Tool
          </Link>
        </div>
        <div className="header__dashboard header__item">
          <Link to="/dashboard" className="header__link">
            dashboard
          </Link>
        </div>
      </div>

      <div className="header__right">
        <div className="header__signup header__item">
          <Link to="/signup" className="header__link">
            signup
          </Link>
        </div>
        <div className="header__login header__item">
          <Link to="/login" className="header__link">
            login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
