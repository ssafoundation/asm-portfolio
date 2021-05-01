import React from "react";
// const serviceData = [
//   {
//     title: "Web Design",
//     content: " Lorem ipsum dolor sit amet consectetur adipisicingelit. Dolorum iusto cumque debitis culpa quod nesciuntvitae perspiciatis laborum quaerat atque?",
//     icon: "",
//   },
// ];
const Service = () => {
  return (
    <div className="dashboard-body">
      <div className="service-area">
        <div className="service-padding width-wrap">
          <div className="service-main-wrap">
            <div className="service-title">
              <h2>
                My <span>Services</span>
              </h2>
            </div>
            <div className="service-item-wrap">
              <div className="service-single-items">
                <ul>
                  <li>
                    <div className="single-item">
                      <span className="service-item-logo">
                        <i className="fas fa-yin-yang"></i>
                      </span>
                      <div className="service-item-content">
                        <h3>Web Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum iusto cumque debitis culpa quod nesciunt
                          vitae perspiciatis laborum quaerat atque?
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-item">
                      <span className="service-item-logo">
                        <i className="fas fa-layer-group"></i>
                      </span>
                      <div className="service-item-content">
                        <h3>UI/UX Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum iusto cumque debitis culpa quod nesciunt
                          vitae perspiciatis laborum quaerat atque?
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-item">
                      <span className="service-item-logo">
                        <i className="fas fa-book-reader"></i>
                      </span>
                      <div className="service-item-content">
                        <h3>Graphics Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum iusto cumque debitis culpa quod nesciunt
                          vitae perspiciatis laborum quaerat atque?
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-item">
                      <span className="service-item-logo">
                        <i className="fab fa-react"></i>
                      </span>
                      <div className="service-item-content">
                        <h3>Frontend Development</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum iusto cumque debitis culpa quod nesciunt
                          vitae perspiciatis laborum quaerat atque?
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-item">
                      <span className="service-item-logo">
                        <i className="fab fa-wordpress-simple"></i>
                      </span>
                      <div className="service-item-content">
                        <h3>Wordpress</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum iusto cumque debitis culpa quod nesciunt
                          vitae perspiciatis laborum quaerat atque?
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-item">
                      <span className="service-item-logo">
                        <i className="fas fa-viruses"></i>
                      </span>
                      <div className="service-item-content">
                        <h3>Bug Fix</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum iusto cumque debitis culpa quod nesciunt
                          vitae perspiciatis laborum quaerat atque?
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
