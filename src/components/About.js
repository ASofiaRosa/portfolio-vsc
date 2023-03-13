import React from "react";
import fotoSquare from "../assets/fotoSquare.jpg";

export default function About() {
  return (
    <div className="aboutSection">
      <div className="aboutHeader">
        <hr></hr>
        <h2>About</h2>
        <hr></hr>
      </div>
      <div className="aboutTextImg">
        <div className="aboutText">
          Hi! I'm Sofia. <br></br>I have a strongly logical and creative mind,
          and I feel my best when using it at full force. Like I always say, I
          feel stressed when I am not under stress. I love to create products
          that make the work of other people easier. Even in my past job
          experiences, I couldn't help myself but to develop ways to make things
          go smother. In one of those attempts I took the initiative to learn
          VBA code to automatize an excel sheet. I was mesmerized to find out, I
          could teach myself a tool which enables such limitless creativity for
          problem solving. Life events brought me to reconsider my career path
          and I quickly made the choice to join the coding world of
          possibilities.
        </div>
        <img src={fotoSquare} alt="profile"></img>
      </div>
    </div>
  );
}
