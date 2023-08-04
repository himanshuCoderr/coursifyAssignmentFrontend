import React from "react";
import "./FindJob.css";
import completeProfileImg from "../asset/asset 1.png";
import recieveJobOfferImg from "../asset/asset 2.png";
import acceptJobImg from "../asset/asset 3.png";
function FindJob() {
  return (
    <div className="findJobContainer">
      <div className="findJobMain">
        <div className="findJobMainUp">
          <h1>Find your next top tech job in 1 week</h1>
          <p>
            <span>Are you a top 2%</span> Software Engineer,Product Manager or
            Data Scientist? <br /> Let Leading Indian technology{" "}
            <span>companies compete to hire you.</span>
          </p>
          <div className="MainUp_btnCont">
            <button>APPLY TO JOIN</button>
            <span>100% free. It takes only 5 minutes</span>
          </div>
        </div>
        <div className="findJobMainDown">
          <div className="JobMainDownCard">
            <img src={completeProfileImg} alt="" />
            <h4>STEP 1: COMPLETE PROFILE</h4>
            <p>
              Once you are approved, we showcase you to leading Indian
              technology startups
            </p>
          </div>
          <div className="JobMainDownCard">
            <img src={acceptJobImg} alt="" />
            <h4>STEP 2: RECEIVE JOB OFFERS</h4>
            <p>
              Companies start sending interview requests. Talk to only the ones
              you like.
            </p>
          </div>
          <div className="JobMainDownCard">
            <div className="imageCont">
              <img src={recieveJobOfferImg} alt="" />
            </div>
            <h4>STEP 3: ACCEPT DREAM JOB</h4>
            <p>Compare your offers and accept the best one. Hired!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindJob;
