import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "transparent" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/" style={{color:"black"}}>
            AYURBOT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
