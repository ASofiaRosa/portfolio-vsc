import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ProjectItem({
  title,
  description,
  tech,
  image,
  git,
  web,
}) {
  return (
    <div className="projectItem">
      <div className="projectImage">
        <Zoom>
          <img src={image} alt="ProjectDemo"></img>
        </Zoom>
      </div>
      <div className="projectDetails">
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div className="projectTechStack">
          {tech.map((tool) => (
            <li>{tool}</li>
          ))}
        </div>
        <div className="projectIcons">
          <a href={git} title="GitHub" target="_blank">
            <FaGithub size={40} color={"var(--heroBackground)"} />
          </a>
          <a href={web} title="web-site" target="_blank">
            <BiLinkExternal size={46} color={"var(--heroBackground)"} />
          </a>
        </div>
      </div>
    </div>
  );
}

// criar aqui fora, funcao para a imagem e outra para o Texto. depois definir la em cima se for esq imagem e depois texto, se for dir texto e depois imagem
