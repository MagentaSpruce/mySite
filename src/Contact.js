import React from "react";
import emailjs from "emailjs-com";

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
      <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
          <GiYinYang />
        </button>
        <h2 className="contact-header">Question, idea or opportunity?</h2>
        <div className="underline"></div>
        <form onSubmit={sendEmail}>
          <label>name</label>
          <input type="text" name="name" />
          <label>email</label>
          <input type="email" name="user_email" />
          <label>message</label>
          <textarea name="message" rows="4" />
          <input type="submit" value="Send" />
        </form>
      </main>
    </>

    // {/* <Link to="/" classNameName="btn">
    //   Back to Lodge
    // </Link> */}
  );
};

export default Contact;
