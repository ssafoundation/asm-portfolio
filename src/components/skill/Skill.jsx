import React from 'react';

const Skill = () => {
    return (
        <div className="dashboard-body">
            <div className="skill-area">
                <div className="skill-padding width-wrap">
                    <div className="skill-title">
                        <h2><span>My</span> Skills</h2>
                    </div>
                    <div className="skill-main-wrap">
                        <div className="skill-single-wrap">
                            <div className="skill-left">
                                <h3>Accordion</h3>
                                <p>
                                    The accordion part will be done with react.js so it is
                                    left blank for now.
                    </p>
                            </div>
                            <div className="skill-right">
                                <h3>Skill bar</h3>
                                <p>
                                    The progress bar part will be done with react.js, so it is
                                    left blank for now.
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;