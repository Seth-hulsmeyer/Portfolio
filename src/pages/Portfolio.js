//import react and project component
import React from "react";
import Project from "../components/Project";

//project array, title, image, live link, github repo
const projArray = [
  {
    title: "CO National Parks",
    image: "./assets/Ntl_Parks_site.PNG",
    repo: "https://github.com/Seth-hulsmeyer/CO_Park_Rangers",
    link: "https://seth-hulsmeyer.github.io/CO_Park_Rangers/",
  },
  {
    title: "Provider Portal",
    image: "./assets/Provider_Portal.PNG",
    repo: "https://github.com/Seth-hulsmeyer/Provider-Portal",
    link: "https://thawing-shelf-08845.herokuapp.com/members",
  },
  {
    title: "Employee Directory",
    image: "./assets/Employee_Directory.PNG",
    repo: "https://github.com/Seth-hulsmeyer/Employee_Directory",
    link: "https://pedantic-wozniak-a6abbd.netlify.app",
  },
  {
    title: "Budget Tracker",
    image: "./assets/Budget_Tracker.PNG",
    repo: "https://github.com/Seth-hulsmeyer/Budget_Tracker",
    link: "https://agile-reef-45050.herokuapp.com/",
  },
  {
    title: "Fitness Tracker",
    image: "./assets/Fitness_Tracker.PNG",
    repo: "https://github.com/Seth-hulsmeyer/Fitness_Tracker",
    link: "https://radiant-atoll-44072.herokuapp.com/stats",
  },
  {
    title: "LotR Quiz Game",
    image: "./assets/LotR_Game.PNG",
    repo: "https://github.com/Seth-hulsmeyer/LotR_QuizGame",
    link: "https://seth-hulsmeyer.github.io/LotR_QuizGame/",
  },
];

function Portfolio() {
  return (
    <div>
      <section>
        <h1>Portfolio</h1>
        <hr />
        <div className="row">
          {projArray.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              image={project.image}
              link={project.link}
              repo={project.repo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
