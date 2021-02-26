import React from "react";

function Container() {
  return (
    <section>
      <h1>Contact</h1>
      <hr />
      <form>
        <div className="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput3">Message</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput3"
            placeholder="Message"
          />
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Container;
