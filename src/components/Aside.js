import React from "react";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <aside>
      <div class="card">
        <img src="../assets/seth.jpg" class="card-img-top" alt="Seth pic" />
        <div class="card-body">
          <h5 class="card-title">Seth Hulsmeyer</h5>
          <p>Phone: (937) 638-8565</p>
          <p>Email: seth.hulsmeyer@hotmail.com</p>
          <p>
            GitHub:{" "}
            <Link target="_blank" to="https://github.com/Seth-hulsmeyer"></Link>
            Seth-Hulsmeyer
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
