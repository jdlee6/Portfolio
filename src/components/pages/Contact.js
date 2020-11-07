import React from 'react';
import ContactForm from '../ContactForm';
import Fade from 'react-reveal/Fade';

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <div className="section-title">Contact</div>
      </div>

      <Fade bottom>
        {/* <div className="contact-message">Feel free to leave me a message!</div> */}

        <div className="contact-container">
          <ContactForm />
        </div>
      </Fade>
    </div>
  );
}
