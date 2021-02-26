import React from "react";

const linkArray = {
  LinkedIn: "https://www.linkedin.com/in/seth-hulsmeyer/",
  GitHub: "https://github.com/Seth-hulsmeyer",
  Resume: "./assets/Seth_Hulsmeyer_resume_11.13.2020.pdf",
};
function Footer() {
  return (
    <footer className="footer">
      LinkedIn:
      <a href={linkArray.LinkedIn} target="_blank">
        {" "}
        <i className="fab fa-linkedin"></i>{" "}
      </a>
      GitHub:
      <a href={linkArray.GitHub} target="_blank">
        {" "}
        <i className="fab fa-github"></i>{" "}
      </a>
      Resume:
      <a href={linkArray.Resume} target="_blank">
        {" "}
        <i className="fas fa-file-pdf"></i>{" "}
      </a>
    </footer>
  );
}

export default Footer;
