import React from "react";
import emailjs from "emailjs-com";
import Particle from "./Particle";

import { GiYinYang } from "react-icons/gi";
import { useGlobalContext } from "./Context";

const Contact = () => {
  const { openSidebar, openModal } = useGlobalContext();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1yqkhsi",
        "template_80jj74g",
        e.target,
        "user_VOjAjHBHYyuc9oglCHwdz"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Particle />
      <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
          <GiYinYang />
        </button>
        <h2 className="contact-header">Question, idea or opportunity?</h2>
        <div className="underline"></div>
        <div className="contact-container">
          <h2 className="contact-form-header">Let's talk about it.</h2>

          <form
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <label className="contact-form-label-top">Your Name</label>
            <input className="contact-form-input-top" type="text" name="name" />
            <br />
            <label className="contact-form-label-top">Your Email</label>
            <input
              className="contact-form-input-top"
              type="email"
              name="user_email"
            />
            <br />
            <label className="contact-inputbox-label">Your message</label>
            <textarea className="contact-input" name="message" rows="4" />
            <input className="contact-button" type="submit" value="Send" />
          </form>
        </div>
      </main>
    </>

    // {/* <Link to="/" classNameName="btn">
    //   Back to Lodge
    // </Link> */}
  );
};

export default Contact;
