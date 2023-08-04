import React from "react";
import "./HowItWorks.css";
import CreateProfile from "../media/img/Create Profile.png";
import ComponyCompete from "../media/img/Companies Compete.png";
import Transperance from "../media/img/Transparency.png";
import DedicatedTalent from "../media/img/Dedicated Talent Advocate.png";
import Privacy from "../media/img/Privacy.png";

function HowItWorks() {
  return (
    <div className="HowItWorkCont">
      <h2>HOW IT WORKS</h2>
      {/* 1 */}
      <div className="HowItWorkContDiv">
        <div className="HowItWorkContLeft">
          <div>
            <p className="extraSpace"></p>
            <h4>
              Create your free candidate <br />
              profile
            </h4>
          </div>
          <p>
            Answer a few questions about yourself - it takes less <br />
            than 5 minutes.
          </p>
          <div>
            <i>
              <p>🥇What is your biggest achievement?</p>
              <p>👑What does your ideal opportunity look like?</p>
            </i>
          </div>
        </div>

        <div className="HowItWorkContRight">
          <img src={CreateProfile} alt="" />
        </div>
      </div>

      {/* 2 */}

      <div className="sitBackContDiv">
        <div className="sitBackContRight">
          <img src={ComponyCompete} alt="" />
        </div>
        <div className="sitBackContLeft">
          <div>
            <p className="extraSpace"></p>
            <h4>
              Sit back while companies <br /> compete to hire you profile
            </h4>
          </div>
          <p>
            Don’t waste your time reaching out to companies or <br />
            dealing with recruiters.
          </p>
          <div>
            <i>
              <p>‍💨 We fast-track your profile to hiring managers.</p>
              <p>
                ‍🙆‍♂️ Get multiple interview requests with upfront salary <br />{" "}
                offers within days.
              </p>
            </i>
          </div>
        </div>
      </div>

      {/* 3 */}

      <div className="salaryAndRoleDiv">
        <div className="salaryAndRoleLeft">
          <div>
            <p className="extraSpace"></p>
            <h4>Salary & Role transparency</h4>
          </div>
          <p>
            Interview requests from companies mention salary and <br /> role
            details upfront - before you decide to accept or <br /> decline
            them.
          </p>
        </div>

        <div className="salaryAndRoleRight">
          <img src={Transperance} alt="" />
        </div>
      </div>

      {/* 4 */}

      <div className="dedicatedTalentDiv">
        <div className="dedicatedTalentRight">
          <img src={DedicatedTalent} alt="" />
        </div>
        <div className="dedicatedTalentLeft">
          <div>
            <p className="extraSpace"></p>
            <h4>A dedicated talent advocate</h4>
          </div>

          <p>
            Your Talent Advocate will guide you through the entire <br />{" "}
            process. From polishing your profile, providing interview <br />{" "}
            tips to helping negotiate offers!
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="currentAndPastDiv">
        <div className="currentAndPastLeft">
          <div>
            <p className="extraSpace"></p>
            <h4>
              Current and past employers <br /> can’t see your profile
            </h4>
          </div>
          <p>
            By default, we hide your profile from any employers that <br /> you list as your current and past employer.
          </p>
          <div>
            <i>
              <p>‍🕵 Privacy Assured</p>
            </i>
          </div>
        </div>

        <div className="currentAndPastRight">
          <img src={Privacy} alt="" />
        </div>
      </div>

      {/* <div className="sitBackCont">
        <div className="sitBackContLeft">
          <img src="" alt="" />
        </div>
        <div className="sitBackContRight"></div>
      </div> */}
    </div>
  );
}

export default HowItWorks;
