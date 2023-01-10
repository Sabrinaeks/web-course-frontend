import React from "react";
import About from "./About";
import Contact from "./Contact";
import Course from "./Course";
import Partners from "./Partners";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Your Dream Career Starts With Us
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Belajar sesuai arahan yang telah disusun baik oleh expert &
                komunitas yang supportive
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Now
                </NavLink>
                <NavLink
                  to="/course"
                  className="btn btn-outline-light rounded-pill px-4 py-2"
                >
                  Our Courses
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Course />
      <Partners />
      <Contact />
    </div>
  );
}

export default Home;
