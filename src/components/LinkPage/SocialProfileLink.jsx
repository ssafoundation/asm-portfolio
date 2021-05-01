import React from 'react';
import { Link } from 'react-router-dom';
import './social-link.css';
const SocialProfileLink = () => {
    return (
      <div className="social-link-navbar">
        <Link
          to={{
            pathname: "https://web.facebook.com/akhtar.monyr.52/",
          }}
          target="_blank"
        >
          <span>
            <i className="fab fa-facebook-f    "></i>
          </span>
        </Link>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/md-akhtaruzzaman-a1925a1ba/",
          }}
          target="_blank"
        >
          <span>
            <i className="fab fa-linkedin-in    "></i>
          </span>
        </Link>
        <Link
          to={{
            pathname: "https://github.com/ssafoundation",
          }}
          target="_blank"
        >
          <span>
            <i className="fab fa-github    "></i>
          </span>
        </Link>
        <Link
          to={{
            pathname: "https://codepen.io/akhtar01727",
          }}
          target="_blank"
        >
          <span>
            <i className="fab fa-codepen    "></i>
          </span>
        </Link>
        <Link
          to={{
            pathname: "https://twitter.com/akhtar01727",
          }}
          target="_blank"
        >
          <span>
            <i className="fab fa-twitter    "></i>
          </span>
        </Link>
      </div>
    );
};

export default SocialProfileLink;