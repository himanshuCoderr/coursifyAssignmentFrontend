import React from "react";
import "./Navigation.css";
import topHireLogo from "../media/img/topHireLogo.png";
function Navigation() {
  return (
    <div className="navContainer" >
      <div className="navRight">
        <img src={topHireLogo}></img>
      </div>
      <div className="navLeft">
        <a href="">For Employers</a>
        <a href="">Refer & Earn 15k</a>
        <a href="">Login</a>
        <a href="">Sign Up</a>
      </div>
    </div>
  );
}

export default Navigation;
