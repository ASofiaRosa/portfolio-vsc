import React from "react";
import ContactForm from "./ContactForm";
import footerimg from "../assets/footer.png";
import { FaGithub, FaLinkedin, FaXing } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

export default function Footer() {
  return (
    <div className="footerSection" id="contactForm">
      <div className="footerHeader">
        <hr></hr>
        <h2>Contact</h2>
        <hr></hr>
      </div>
      <ContactForm />
      <div className="footerIcons">
        <a href="https://github.com/ASofiaRosa" title="GitHub" target="_blank">
          <FaGithub size={40} color={"var(--heroBackground)"} />
        </a>
        <a
          href="https://www.linkedin.com/in/anasofiarosa-fullstack/"
          title="Linkedin"
          target="_blank"
        >
          <FaLinkedin size={40} color={"var(--heroBackground)"} />
        </a>
        <a
          href="https://www.xing.com/profile/AnaSofia_Rosa"
          title="Xing"
          target="_blank"
        >
          <FaXing size={40} color={"var(--heroBackground)"} />
        </a>
      </div>
    </div>
  );
}
