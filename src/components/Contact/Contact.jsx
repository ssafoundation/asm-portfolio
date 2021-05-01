import React from 'react';

const Contact = () => {
    return (
        <div className="dashboard-body">
           
            <div className="contact-area">
                <div className="contact-padding width-wrap">
                    <div className="contact-title">
                        <h2>get in <span>touch</span></h2>
                    </div>
                    <div className="contact-main-wrap">
                        <div className="contact-map-area">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11487.506212473667!2d89.93978528136338!3d24.92056922859859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53d87274c106d859!2sNiribili!5e0!3m2!1sen!2sbd!4v1600949364825!5m2!1sen!2sbd"
                                frameborder="0"
                                style="border: 0"
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe> */}
                        </div>
                        <div className="contact-form-area">
                            <form action="">
                                <div className="contact-form">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter Your Name"
                                    />
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter Your Email"
                                    />
                                    <textarea name="" id="" placeholder="Enter Your massage">
                                    </textarea>
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Contact;