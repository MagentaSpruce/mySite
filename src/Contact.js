import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Hello from contact</h1>
      <Link to="/home" className="btn">
        Back to Lodge
      </Link>
    </div>
  );
};

export default Contact;
