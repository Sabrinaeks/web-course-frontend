import React from "react";

function CourseDetail() {
  return (
    <div>
      <div class="container my-5 py-5">
        <div class="row">
          <div class="col-sm-4">
            <img
              src="assets/detail1.png"
              alt="course.title"
              class="img-fluid"
            />
          </div>
          <div class="col-sm-8">
            <h2>Bootcamp UI/UX Designer with Figma 2022</h2>
            <p>Start career as UI/UX Designer with Miro and Figma</p>
            <div class="card mb-3">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">
                  131 lessons (14.77 hours)
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">Bersertifikat</h6>
                <div class="d-flex mt-2 align-items-center gap-1 course-price-wrapper">
                  Rp <span class="">599,000</span>
                </div>
              </div>
            </div>
            <a href="course.url" class="btn btn-primary">
              Join now
            </a>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-sm-4">
            <img
              src="assets/detail2.png"
              alt="course.title"
              class="img-fluid"
            />
          </div>
          <div class="col-sm-8">
            <h2>Full-Stack Laravel Flutter: Build e-Wallet Mobile Apps</h2>
            <p>Start career as UI/UX Designer with Miro and Figma</p>
            <div class="card mb-3">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">
                  131 lessons (14.77 hours)
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">Bersertifikat</h6>
                <div class="d-flex mt-2 align-items-center gap-1 course-price-wrapper">
                  Rp <span class="">599,000</span>
                </div>
              </div>
            </div>
            <a href="course.url" class="btn btn-primary">
              Join now
            </a>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-sm-4">
            <img
              src="assets/detail3.jpg"
              alt="course.title"
              class="img-fluid"
            />
          </div>
          <div class="col-sm-8">
            <h2>
              Full-Stack Laravel Flutter 2021: Building E-Commerce and Chat Apps
            </h2>
            <p>Start career as UI/UX Designer with Miro and Figma</p>
            <div class="card mb-3">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">
                  131 lessons (14.77 hours)
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">Bersertifikat</h6>
                <div class="d-flex mt-2 align-items-center gap-1 course-price-wrapper">
                  Rp <span class="">599,000</span>
                </div>
              </div>
            </div>
            <a href="course.url" class="btn btn-primary">
              Join now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
