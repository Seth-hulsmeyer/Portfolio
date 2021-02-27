//import react and link
import React from "react";

function Project(props) {
  return (
    <div className="col-sm-6">
      <img
        className="img-thumbnail"
        src={props.image}
        alt={props.title}
        style={{ height: "90%", width: "90%" }}
      />
      <h5>{props.title}</h5>
      <a className="inline-link" href={props.repo} target="_blank">
        [GitHub Repo] {"  "}
      </a>
      <a className="inline-link" href={props.link} target="_blank">
        {"  "} [Live Link]
      </a>
    </div>
  );
}

export default Project;
