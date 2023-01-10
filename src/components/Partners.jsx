import React from "react";

const Partners = () => {
  return (
    <section id="partners" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Logo Kerja Sama Kami</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <img src="assets/gojek.jpg" alt="Partner 1" className="img-fluid" />
          </div>
          <div className="col-md-3 mb-4">
            <img
              src="assets/mandiri.jpg"
              alt="Partner 2"
              className="img-fluid"
            />
          </div>
          <div className="col-md-3 mb-4">
            <img src="assets/bca.jpg" alt="Partner 3" className="img-fluid" />
          </div>
          <div className="col-md-3 mb-4">
            <img
              src="assets/tokopedia.jpg"
              alt="Partner 4"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
