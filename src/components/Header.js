import React from "react";
import fotoSquare from "../assets/fotoSquare.jpg";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLeft">
        <img src={fotoSquare} alt="profile"></img>
        <p>
          Ana Sofia Rosa <br></br>
          Web & App Developer
        </p>
      </div>
      <div className="HeaderRight">
        <ul>
          <li>EN | DE</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
