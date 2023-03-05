import React from "react";
import { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

export default function ProjectItem() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="projectItem">
      <div className="projectImage" onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? (
          <div className="projectDetails" onClick={() => setIsClicked(false)}>
            caixa para aparecer por cima com muitos detalhes e promenores
          </div>
        ) : null}
      </div>
      <div className="projectLabel" onClick={() => setIsClicked(!isClicked)}>
        <div>Food Blog</div>
        <div>
          <a
            href="https://github.com/Neelima-Rapeti/Contentfull-Cookbook"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a href="https://contentfull-cookbook.netlify.app/" title="web-site">
            <MdWeb />
          </a>
          {isClicked ? <BiDownArrow /> : <BiUpArrow title="expand" />}
        </div>
      </div>
    </div>
  );
}
