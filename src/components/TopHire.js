import React from "react";

import backgroundImg from "../asset/asset 15.jpeg";
import credLogo from "../asset/asset 5.png";
import credMen from "../asset/asset 6.jpeg";
import dream11Logo from "../asset/asset 7.png";
import dream11Men from "../asset/asset 8.jpeg";
import cureFitLogo from "../asset/asset 9.png";
import cureFitMen from "../asset/asset 10.jpeg";
import vScreenShot from "../asset/asset 16.jpeg";
import "./TopHire.css";
import linkedInIcon from "../media/img/linkedin Icon.png";

function TopHire() {
  return (
    <div className="topHireCont">
      <div className="topHireMain">
        <div className="topHireUp">
          <div>
            <h2>Techies 💘 TopHire</h2>
            <p>
              A better love story than twilight. Check the video below to find
              out why.
            </p>
          </div>
          <img src={vScreenShot} alt="" />
        </div>
        <div className="topHireDown">
          <div className="topHiredCard">
            <img src={credLogo} alt="" />

            <div className="hiredMen">
              <img src={credMen} alt="" />
              <div>
                <h5>
                  Yadhu Manoharan
                  <img className="linkedIcon" src={linkedInIcon} alt="" />
                </h5>
                <p>Sr. iOS Engineer</p>
              </div>
            </div>
            <p>
              TopHire was able to make the process really easy. They were able
              to schedule interviews with the best companies in the industry and
              drove the `entire process smoothly.
            </p>
          </div>

          <div className="topHiredCard">
            <img src={dream11Logo} alt="" />

            <div className="hiredMen">
              <img src={dream11Men} alt="" />
              <div>
                <h5>Santosh Nain </h5>
                <p>SDE-2</p>
              </div>
            </div>
            <p>
              A friend of mine told me about TopHire when I started looking for
              new opportunities. The TopHire team was extremely helpful,
              professional and quick with everything.
            </p>
          </div>

          <div className="topHiredCard">
            <img src={cureFitLogo} alt="" />

            <div className="hiredMen">
              <img src={cureFitMen} alt="" />
              <div>
                <h5>Tarun Dugar </h5>
                <p>Sr. Software Engineer</p>
              </div>
            </div>
            <p>
              Compared to other job portals, what stood out for me was that
              TopHire, on top of providing really good opportunities, helped me
              in negotiations with the companies too.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TopHire;
