import React from "react";

export default function Header() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Lebenslauf_AnaRosa.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Lebenslauf_AnaRosa.pdf";
        alink.click();
      });
    });
  };

  const handleClickScroll = () => {
    const element = document.getElementById("contactForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="HeaderContainer">
      <div className="HeaderLeft">
        <img
          src={
            "https://res.cloudinary.com/dup0sa10r/image/upload/v1678827138/portfolio/fotoSquare_kemfbu.jpg"
          }
          alt="profile"
        ></img>
        <p>
          Ana Sofia Rosa <br></br>
          Web & App Developer
        </p>
      </div>
      <div className="HeaderRight">
        <ul>
          <li onClick={onButtonClick}>Download CV</li>
          <li>
            <a href="https://github.com/ASofiaRosa" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anasofiarosa-fullstack/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anasofiarosa-fullstack/"
              target="_blank"
            >
              Xing
            </a>
          </li>
          <li onClick={handleClickScroll}>Contact</li>
        </ul>
      </div>
    </div>
  );
}
