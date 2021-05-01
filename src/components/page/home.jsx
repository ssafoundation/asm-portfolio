import React from "react";
import { Link } from "react-router-dom";
import Logo_1 from "./logo-2.png";
import Logo_2 from "./logo.png";
import MainNavbar from "../navbar/MainNavbar";

const home = () => {
  return (
    <>
      <div className="dashboard-main-wrap">
        <div className="dashboard-padding">
          <div className="dashboard-header">
            <div className="dashboard-header-left">
              <div className="dashboard-main-icon all-page-logo">
                <Link to="/">
                  {/* <h1>Login</h1> */}
                  {/* <img src="img/logo.png" alt="" /> */}
                </Link>
              </div>
            </div>
            <div className="dashboard-header-right">
              <div className="dashboard-profile">
                <h1>
                  Sad<span>ik</span>
                </h1>
                <div className="dashboard-account">
                  <ul>
                    <li>
                      <Link to="/">Login</Link>
                    </li>
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-menu">
            <div className="dashboard-main-icon">
              <div className="d-main-icon-wrap">
                <Link to="/">
                  <img src={Logo_1} alt="" />
                  <img src={Logo_2} alt="" />
                  
                
                </Link>
              </div>
            </div>
           <MainNavbar/>
          </div>
         {/* <MainBody/> */}
        </div>
      </div>
    </>
  );
};
export default home;
