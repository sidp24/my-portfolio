
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false); // State to track submission status
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submitting status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting

    emailjs.sendForm('service_lgha4k8', 'template_uqurqwp', form.current, 'AuolykRpGeIHkz99f')
      .then((result) => {
          console.log(result.text);
          setIsSubmitting(false); // End submitting
          setSubmitted(true); // Set submitted to true on successful submission
          // Optionally clear the form here
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setIsSubmitting(false); // End submitting on error
          // Handle errors here
      });
  };
  
  return (
    <div className="contact-container" id="contact">
        <h2>Contact Me</h2>
        {!submitted ? (
          <form ref={form} onSubmit={sendEmail} className={`contact-form ${isSubmitting ? 'fade-out' : ''}`}>
              <label>Name</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Message</label>
              <textarea name="message" required />
              <input type="submit" value="Send" className="submit-button" />
          </form>
        ) : (
          <div className="confirmation-message">
              Thank you for your message! I will get back to you soon.
          </div>
        )}
    </div>
  );
};

export default Contact;