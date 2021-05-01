import emailjs from "emailjs-com";
import React from 'react';
const Contact = () => {
      function sendEmail(e) {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_xf40rzp",
            "template_gjn59ve",
            e.target,
            "user_3cIsxsTA4VGG108BfTBjp"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    return (
      <div className="dashboard-body">
        <div className="contact-area">
          <div className="contact-padding width-wrap">
            <div className="contact-title">
              <h2>
                get in <span>touch</span>
              </h2>
            </div>
            <div className="contact-main-wrap">
              <div className="contact-map-area">
                <iframe
                  title="my google location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5126.619614379353!2d89.81534544783152!3d24.903656005730042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzA1LjQiTiA4OcKwNDgnNDguMCJF!5e0!3m2!1sen!2sbd!4v1619886747406!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="contact-form-area">
                <form className="contact-form" onSubmit={sendEmail}>
                  <input type="hidden" name="contact_number" />
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;