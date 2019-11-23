import React, { Component } from 'react';
import ContactForm from '../ContactForm';

export class Contact extends Component {
  render() {
    return (
      <div className="contact-section" id="contact">
        <div className="container">
          <div className="section-title">Contact</div>
        </div>

        <div className="contact-message">Feel free to leave me a message!</div>

        <div className="contact-container">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
