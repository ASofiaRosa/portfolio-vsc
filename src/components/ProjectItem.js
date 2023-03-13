import React from "react";
import { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import chefsKiss from "../assets/chefsKiss.png";

export default function ProjectItem() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="projectItem">
      <img src={chefsKiss} alt="chefsKiss"></img>
      <div>
        <div className="projectDetails" onClick={() => setIsClicked(false)}>
          <h3>Chef's Kiss</h3>
          <h4>Recipes Blog with search, order and filtering functions.</h4>
          <h4>Bootcamp group project. I did the "All Recipes" page.</h4>
          <div className="projectTechStack">
            <p>React</p>
            <p>Bootstrap</p>
            <p>Contentful - headless CMS</p>
          </div>
          <div className="projectIcons">
            <a
              href="https://github.com/Neelima-Rapeti/Contentfull-Cookbook"
              title="GitHub"
              target="_blank"
            >
              <FaGithub size={40} color={"var(--heroBackground)"} />
            </a>
            <a
              href="https://contentfull-cookbook.netlify.app/"
              title="web-site"
              target="_blank"
            >
              <MdWeb size={50} color={"var(--heroBackground)"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// criar aqui fora, funcao para a imagem e outra para o Texto. depois definir la em cima se for esq imagem e depois texto, se for dir texto e depois imagem
