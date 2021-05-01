import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
const images = [
  {
    img: "https://i.ibb.co/wYpkHhJ/farmer-service.png",
    title: "Fermer Service",
    html: "Html",
    css: "css",
    react: "react",
    bootstrap: "Bootstrap",
    liveLink: "https://farmers-services.web.app/",
  },
  {
    img:
      "https://i.ibb.co/SQr4mfZ/screencapture-asm-book-web-app-2021-05-01-13-22-30.png",
    title: "Book Service",
    html: "Html",
    css: "css",
    react: "react",
    bootstrap: "Bootstrap",
    liveLink: "https://asm-book.web.app/",
  },
  {
    img: "https://i.ibb.co/pdXLqmY/Screenshot-1.png",
    title: "FootBall League",
    html: "Html",
    css: "css",
    react: "react",
    bootstrap: "Bootstrap",
    liveLink:
      "https://60499a0ae5773b2202ae6106--angry-heisenberg-c490ca.netlify.app/",
  },
  {
    img: "https://i.ibb.co/09wFsSQ/Screenshot-2.png",
    title: "Guargians Ai",
    html: "Html",
    css: "css",
    liveLink: "https://ssafoundation.github.io/tajulvai/index.html",
    bootstrap: "Bootstrap",
  },
];
const Portfolio = () => {
  return (
    <div className="dashboard-body">
      <div className="portfolio-area">
        <div className="portfolio-padding width-wrap">
          <div className="portfolio-title">
            <h2>
              My <span>Portfolio</span>
            </h2>
          </div>
          <div className="portfolio-area">
            <div className="portfolio-main-wrap">
              <div className="row">
                {images.map((img, index) => (
                  <div key={index} className="col-md-4">
                    <div className="my-single-work">
                      <img src={img.img} alt="" />

                      <Link to={{ pathname: img.liveLink }} target="_blank">
                        <h5>{img.title}</h5>
                      </Link>
                      <span>{img.html}</span>
                      <span>{img.css}</span>
                      <span>{img.react}</span>
                      <span>{img.bootstrap}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
