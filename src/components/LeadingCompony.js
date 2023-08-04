import React from "react";
import ComponyListImg from "../asset/asset 14.png";
import "./LeadingCompony.css";
function LeadingCompony() {
  return (
    <div className="componyCont">
      <h2>LEADING COMPANIES BUILD TEAMS ON TOPHIRE</h2>
      <img src={ComponyListImg} alt="" />
      {/* <div className="componyGrid">
      </div> */}
    </div>
  );
}

export default LeadingCompony;
