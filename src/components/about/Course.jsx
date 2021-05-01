import React from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
    return (
        <div>
            <div className="academic-content">
                <h4>TRAINING PROGRAM</h4>
                <div className="skills-area">
                    <h5>WEB DESIGN & DEVELOPMENT</h5>
                    <h6>Ledp Govt Project 2020</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus debitis nulla animi totam aperiam expedita reiciendis magnam amet accusantium, nam vel quod similique. Dolorum sed id laudantium incidunt doloremque!</p>
                </div>
                <div className="skills-area">
                    <h5>WEB DEVELOPMENT</h5>
                    <h6>Programming Hero 2021</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi numquam, est veniam voluptate aut vel? Ullam pariatur sit reiciendis deleniti officiis, at non rem, alias explicabo consequatur voluptatibus asperiores!</p>
                </div>
            </div>
            <div className="academic-content">
                <h4>WORKEXPERIENCE:</h4>
                <div className="skills-area">
                    <h5>Web Designer</h5>
                    <h6>2017-2021</h6>
                    <p>web design work experience in the local market and international market. I have worked in these two marketplaces, Fiverr and Upwork, I am working in the international market.</p>
                </div>
                <div className="skills-area">
                    <h5>Front-end Developer</h5>
                    <h6>2019-2021</h6>
                    <p>front-end development work experience in the local market and international market. I have worked in these two marketplaces, Fiverr and Upwork, I am working in the international market.</p>
                </div>
                <div className="skills-area">
                    <h5>Wordpress Development</h5>
                    <h6>2018-2021</h6>
                    <p>Wordpress development work experience in the local market and international market. I have worked in these two marketplaces, Fiverr and Upwork, I am working in the international market.</p>
                </div>
            </div>
            <div className="academic-content">
                <h4>Portfolio & GitHub:</h4>
                <div className="skills-area">
                    <h5>Github link</h5>
                    <Link to="/">Github Profile</Link>
                    
                </div>
                <div className="skills-area">
                    <h5>Front-end Developer</h5>
                    <Link to="/portfolio">Portfolio</Link>
                </div>
               
            </div>
        </div>
    );
};

export default Course;