import React from "react";
import "./styles/header.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
        />
      </Link>
      <div className="search">
        <input className="search_input" type="text" />

        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_options">
          <span className="header_nav_option_one">Hello</span>
          <span className="header_nav_option_two">User</span>
        </div>
        <div className="header_options">
          <span className="header_nav_option_one">User</span>
          <span className="header_nav_option_two">sometging</span>
        </div>
        <div className="header_options">
          <span className="header_nav_option_one">Join Prime</span>
          <span className="header_nav_option_two">Now</span>
        </div>
        <div className="header_options">
          <Link to="/checkout">
            <span className="header_nav_option_one">Cart</span>
            <span className="header_nav_option_two"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
