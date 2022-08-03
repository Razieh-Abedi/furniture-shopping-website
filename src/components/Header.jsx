import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({favorites}) {
  const isLogin = true;
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="nav-link px-2 link-dark">
                Checkout
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                FAQs
              </a>
            </li>
            <li>
              <Link to="/contact" className="nav-link px-2 link-dark">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end position-relative">
            <span className="me-1">Favorites:</span>
            <span className="me-3">{favorites}</span>
            {!isLogin ? (
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            ) : (
              <button type="button" className="btn btn-outline-primary me-2">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
