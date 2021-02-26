import React from "react";

function Main() {
  return (
    <section>
      <h1>About Me</h1>
      <hr />
      <img class="textwrap" src="./assets/seth.jpg" alt="Seth H pic" />
      {/* <!-- personal info with link to current business website  --> */}
      <p>
        Hello! My name is Seth Hulsmeyer. Currently I am the Manager of Patient
        Administration for the{" "}
        <a target="_blank" href="http://shandyclinic.com">
          Shandy Clinic
        </a>
        . I live in Colorado Springs, and am also a Full Stack Web Developer.
        For schooling, I enrolled in a Full Stack Coding Course through the
        University of Denver. In my free time, I enjoy practicing coding,
        hiking, visiting ghost towns throughout the Rocky Mountains, playing
        volleyball if the weather permits it, and playing video games.
      </p>
      <p>
        Thank you for taking the time to visit my website. You can find my
        contact information on the Contact page, where you can also eventually
        send me your contact information. On the Portfolio page, you currently
        see random pictures from my every day life, but in the near future, you
        will be able to see various links to projects that I have completed.
      </p>
      <hr />
      <h4>Coding Language/Technologies Experience:</h4>
      <ul>
        <li>HTML & CSS</li>
        <li>Javascript & jQuery</li>
        <li>React</li>
        <li>Node & Express</li>
        <li>MySQL & MongoDB</li>
      </ul>
    </section>
  );
}
export default Main;
