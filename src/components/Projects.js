import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "OutRun Me",
    description:
      "Mobile App.\nRunning 1 on 1 challenges.\nBootcamp final group project. Selected to be presented at WBS demoday.",
    tech: ["React Native", "Firebase", "Firestore"],
    image:
      "https://res.cloudinary.com/dup0sa10r/image/upload/v1678838299/portfolio/mockup_outrunme_ogyimx.png",
    git: "https://github.com/stanvlv/outrunme",
    web: "https://www.youtube.com/shorts/EZMvfMzlDEQ",
  },
  {
    title: "PokeFight",
    description:
      "Pokemon game.\nFight between 5 pokemon chosen from user and 5 random pc pokemons.\nBootcamp group project.",
    tech: ["React", "MongoDB", "mongoose", "RESTful API"],
    image:
      "https://res.cloudinary.com/dup0sa10r/image/upload/v1678902412/portfolio/pokeport_pql5zx.png",
    git: "https://github.com/SindhuraKontham/pokefight",
    web: "https://pokemonfightarena.netlify.app/",
  },
  {
    title: "Chef's Kiss",
    description:
      "Recipes Blog with search, order and filtering functions.\nBootcamp group project.",
    tech: ["React", "Bootstrap", "Contentful - Headless CMS"],
    image:
      "https://res.cloudinary.com/dup0sa10r/image/upload/v1678827139/portfolio/chefsKiss_zk7tfa.png",
    git: "https://github.com/Neelima-Rapeti/Contentfull-Cookbook",
    web: "https://contentfull-cookbook.netlify.app/",
  },
  {
    title: "This Portfolio",
    description:
      "Personal portfolio website with animations made using spline.design and GreenSock GSAP.",
    tech: ["React", "Spline", "GSAP"],
    image:
      "https://res.cloudinary.com/dup0sa10r/image/upload/v1678841532/portfolio/imagemportfolio_axhkux.png",
    git: "https://github.com/ASofiaRosa/portfolio-vsc",
    web: "https://anasofiarosa.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div className="projectsSection">
      <div className="projectsHeader">
        <hr></hr>
        <h2>Projects</h2>
        <hr></hr>
      </div>
      <div className="projectsContainer">
        {projects.map((project) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            tech={project.tech}
            image={project.image}
            git={project.git}
            web={project.web}
          />
        ))}
      </div>
    </div>
  );
}
