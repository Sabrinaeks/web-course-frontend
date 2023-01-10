import React from "react";

function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="assets/about1.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">Tentang Kami</h3>
              <h1 className="display-6 mb-2">
                Who <b>We </b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                architecto illo dolor obcaecati similique qui commodi nisi
                voluptatum molestiae maxime quam voluptatibus laboriosam
                incidunt, delectus sed totam optio cum voluptatem veritatis. Ut
                dolor, quia eos tenetur perferendis odit, laborum cupiditate
                nemo, optio natus doloremque accusantium reiciendis in NavLink
                ad delectus?
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
