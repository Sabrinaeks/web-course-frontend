import React from "react";
import { NavLink } from "react-router-dom";

function Course() {
  return (
    <div>
      <section className="course">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center">Kursus Kami</h3>
              <h1 className="display-6 text-center mb-4">
                Kursus <b>Unggulan</b> Kami
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3">
                <img src="assets/web-dev.jpg" class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">Web Development</h5>
                  <p class="card-text lead">
                    Belajar membangun website yang dinamis seperti toko online
                    dengan teknologi web development terbaru
                  </p>
                  <NavLink
                    to="/coursedetail"
                    className="btn btn-outline-primary rounded-pill px-4 py-2"
                  >
                    Explore
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <img
                  src="assets/grafik-desain.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">Graphic Design</h5>
                  <p class="card-text lead">
                    Belajar graphic design untuk membantu bisnis dalam
                    mempromosikan brand dengan baik dan professional
                  </p>
                  <NavLink
                    to="/coursedetail"
                    className="btn btn-outline-primary rounded-pill px-4 py-2"
                  >
                    Explore
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <img src="assets/ui-ux.jpg" class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">UI/UX Design</h5>
                  <p class="card-text lead">
                    Belajar mendesain tampilan website atau mobile apps dan juga
                    berkolaborasi dengan tim developer
                  </p>
                  <NavLink
                    to="/coursedetail"
                    className="btn btn-outline-primary rounded-pill px-4 py-2"
                  >
                    Explore
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3">
                <img
                  src="assets/data-analis.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">Data Analysis</h5>
                  <p class="card-text lead">
                    Menganalisa data penting seperti penjualan dan promo untuk
                    membuat keputusan baik pada bisnis
                  </p>
                  <NavLink
                    to="/coursedetail"
                    className="btn btn-outline-primary rounded-pill px-4 py-2"
                  >
                    Explore
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <img
                  src="assets/android-dev.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Android Development
                  </h5>
                  <p class="card-text lead">
                    Belajar membangun website yang dinamis seperti toko online
                    dengan teknologi web development terbaru
                  </p>
                  <NavLink
                    to="/coursedetail"
                    className="btn btn-outline-primary rounded-pill px-4 py-2"
                  >
                    Explore
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <img src="assets/ios-dev.png" class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">IOS Development</h5>
                  <p class="card-text lead">
                    Belajar membangun website yang dinamis seperti toko online
                    dengan teknologi web development terbaru
                  </p>
                  <NavLink
                    to="/coursedetail"
                    className="btn btn-outline-primary rounded-pill px-4 py-2"
                  >
                    Explore
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Course;
