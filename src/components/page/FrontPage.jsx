import React from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import MyPic from "./img/myPic.png";
const resumeDownload = [
  "https://drive.google.com/file/d/17W8qik4ssh0PWtbGPQHhmCbL6Dqua_6h/view?usp=sharing",
];
const FrontPage = () => {
  return (
    <div className="dashboard-body">
      <Particles
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 150,
              },
            },
            line_linked: {
              enable: true,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image", "circle"],
              image: [
                {
                  src: "https://img.icons8.com/nolan/344/html-5.png",
                  height: 20,
                  width: 20,
                  type: ["circle"],
                },
                {
                  src: "https://img.icons8.com/nolan/2x/html.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "https://img.icons8.com/dusk/344/css3.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "https://img.icons8.com/nolan/2x/css-filetype.png",
                  height: 20,
                  width: 20,
                },
                {
                  src:
                    "https://img.icons8.com/dusk/2x/4a90e2/javascript-logo.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "https://img.icons8.com/plasticine/2x/4a90e2/react.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "https://img.icons8.com/dusk/2x/4a90e2/react.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "https://img.icons8.com/windows/2x/fa314a/node-js.png",
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: ["#fff", "#d1d", "#ffc107", "#F4D03F", "#FF0000"],
            },

            size: {
              value: 15,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
      <div className="hero-main-area">
        <div className="hero-padding">
          <div className="hero-main-wrap">
            <div className="hero-profile-wrap">
              <div className="hero-image">
                <img src={MyPic} alt="" />
              </div>
              <div className="hero-content">
                <h2>MD. Akhtaruzzaman</h2>
                <h3>
                  <Typed
                    strings={["I am A Frontend Developer"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                  />
                </h3>
                {/* <h3>I am A Frontend Developer</h3> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis quae culpa eligendi tempore non illum odio in omnis
                  quasi hic.
                </p>
              </div>
              <div className="hero-social">
                <span>
                  <Link to="/">
                    <i className="fab fa-facebook"></i>
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </span>

                <span>
                  <Link to="/">
                    <i className="fab fa-linkedin-in    "></i>
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <i className="fab fa-github    "></i>
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <i className="fab fa-codepen    "></i>
                  </Link>
                </span>
              </div>
              <div className="resume-download">
                <h5>
                  
                  <Link to={{ pathname: resumeDownload }} target="_blank">
                    Resume
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
