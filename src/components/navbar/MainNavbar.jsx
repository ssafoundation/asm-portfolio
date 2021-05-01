import React from 'react';
import { Link } from 'react-router-dom';
import SocialProfileLink from '../LinkPage/SocialProfileLink';

const MainNavbar = () => {
    return (
        <>
            <div className="dashboard-menu-list">
                <ul>
                    {/* <li>
                        <Link to="/home" data-title="Home">
                            <span>
                                <i className="fas fa-house-user"></i>{" "}
                            </span>
                            <p>Home</p>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/about" data-title="About">
                            <span>
                                <i className="fas fa-address-card"></i>{" "}
                            </span>
                            <p>About</p>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/service" data-title="Service">
                            <span>
                                <i className="fas fa-user-edit"></i>{" "}
                            </span>
                            <p>Service</p>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/works" data-title="Portfolio">
                            <span>
                                <i className="fas fa-address-card"></i>
                            </span>
                            <p>My Works</p>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/skill"data-title="Skills">
                            <span>
                                <i className="fas fa-award"></i>{" "}
                            </span>
                            <p>Skills</p>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/blog" data-title="Blog">
                            <span>
                                <i className="fas fa-blog"></i>{" "}
                            </span>
                            <p>Blog</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact"data-title="Contact">
                            <span>
                                <i className="fas fa-envelope-open-text"></i>{" "}
                            </span>
                            <p>Contact</p>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/account" data-title="Settings">
                            <span>
                                <i className="fas fa-users-cog"></i>{" "}
                            </span>
                            <p>Settings</p>
                        </Link>
                    </li> */}
                </ul>
            </div>
            <SocialProfileLink/>
        </>
    );
};

export default MainNavbar;