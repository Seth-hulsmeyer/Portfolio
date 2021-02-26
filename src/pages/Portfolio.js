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
    title: "Note Taker",
    image: "./assets/Note_Taker.PNG",
    repo: "https://github.com/Seth-hulsmeyer/Note_Taker",
    link: "https://lit-refuge-99276.herokuapp.com/notes",
  },
  {
    title: "LotR Quiz Game",
    image: "./assets/LotR_Game.PNG",
    repo: "https://github.com/Seth-hulsmeyer/LotR_QuizGame",
    link: "https://seth-hulsmeyer.github.io/LotR_QuizGame/",
  },
  {
    title: "Random Password Generator",
    image: "./assets/Psw_Gen.PNG",
    repo: "https://github.com/Seth-hulsmeyer/Password_Generator",
    link: "https://seth-hulsmeyer.github.io/Password_Generator/",
  },
  {
    title: "Daily Work Planner",
    image: "./assets/Daily_Plan.PNG",
    repo: "https://github.com/Seth-hulsmeyer/Daily_Planner",
    link: "https://seth-hulsmeyer.github.io/Daily_Planner/",
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
