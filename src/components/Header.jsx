// import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function Header({ favorites, cartProducts }) {
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
              <Link to="/contact" className="nav-link px-2 link-dark">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end position-relative">
            <button type="button" class="btn btn-primary position-relative">
              Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartProducts}
                <span class="visually-hidden">products in the cart</span>
              </span>
            </button>
            <button type="button" class="btn btn-primary ms-2">
              Favorites <span class="badge bg-secondary">{favorites}</span>
            </button>
            {!isLogin ? (
              <button type="button" className="btn btn-warning ms-2">
                Sign-up
              </button>
            ) : (
              <button type="button" className="btn btn-info text-dark ms-2">
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
