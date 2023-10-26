import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact-Components.css";

export const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "contact_form",
        form.current,
        "dZUIRylBeFfs1kRYW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    setSubmitted(false);
  }, []);

  function submitForm() {
    setSubmitted(true);
  }

  return submitted ? (
    <div>
      <div className="thankyou-form">
      <p className="thankyou">Thank you!</p>
      <p className="intouch">I'll be in touch as soon as I can!</p>
      </div>
    </div>
  ) : (
    <>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input
          className="submit-button"
          type="submit"
          value="Submit"
          onClick={submitForm}
        />
      </form>
    </>
  );
};
