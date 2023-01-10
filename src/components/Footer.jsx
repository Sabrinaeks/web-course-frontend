import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="main-footer" className="bg-dark text-white mt-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Tentang Kami</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor suscipit ipsum, NavLink mollis urna blandit eu.
            </p>
            <p>
              <NavLink to="/about" className="btn btn-outline-light">
                Lebih Lanjut
              </NavLink>
            </p>
          </div>
          <div className="col-md-3">
            <h4>Kategori Kursus</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/coursedetail">Web Development</NavLink>
              </li>
              <li>
                <NavLink to="/coursedetail">Graphic Design</NavLink>
              </li>
              <li>
                <NavLink to="/coursedetail">UI/UX Design</NavLink>
              </li>
              <li>
                <NavLink to="/coursedetail">Data Analysis</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Kursus</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/coursedetail">Web Development</NavLink>
              </li>
              <li>
                <NavLink to="/coursedetail">Graphic Design</NavLink>
              </li>
              <li>
                <NavLink to="/coursedetail">UI/UX Design</NavLink>
              </li>
              <li>
                <NavLink to="/coursedetail">Data Analysis</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Hubungi Kami</h4>
            <p>
              <NavLink to="#">
                <i className="fab fa-facebook fa-fw"></i> Facebook
              </NavLink>
              <br />
              <NavLink to="#">
                <i className="fab fa-twitter fa-fw"></i> Twitter
              </NavLink>
              <br />
              <NavLink to="#">
                <i className="fab fa-instagram fa-fw"></i> Instagram
              </NavLink>
              <br />
              <NavLink to="#">
                <i className="fas fa-envelope fa-fw"></i> Email
              </NavLink>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="lead text-center">
              Copyright &copy; {new Date().getFullYear()} Kursus Online
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
