import React from 'react';
import { Link } from 'react-router-dom';
import './social-link.css';
const SocialProfileLink = () => {
    return (
        <div className="social-link-navbar">
            <Link to='/'><span><i className="fab fa-facebook-f    "></i></span></Link>
            <Link to='/'><span><i className="fab fa-linkedin-in    "></i></span></Link>
            <Link to='/'><span><i className="fab fa-github    "></i></span></Link>
            <Link to='/'><span><i className="fab fa-codepen    "></i></span></Link>
        </div>
    );
};

export default SocialProfileLink;