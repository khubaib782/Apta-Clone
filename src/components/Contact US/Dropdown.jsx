import React from "react";
import "./Dropdown.css";

function Dropdown() {
  return (
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-6 dropdown-text">
          <h1>I have a question about</h1>
          <div class="Form__Element FormSelection">
            <select
              name="questionfor"
              aria-label="Jump list go to section"
              id="QuestionAboutSelect"
            >
              <option value="membership">Membership</option>
              <option value="advertising">
                Advertising, Exhibiting, or Sponsoring
              </option>
              <option value="CPI">CPI Web</option>
              <option value="Find">Find a PT</option>
              <option value="Jobs">Jobs at APTA</option>
              <option value="Learning">Learning Center</option>
              <option value="Licensure">Licensure</option>
              <option value="Media">Media Requests</option>
              <option value="Store">Store Purchases</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
