import React from "react";

function Footer() {
  return (
    <div>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <div className="text-center">
            <a
              href="https://raziwebdeveloper.com/"
              target="_blank"
              className="text-muted text-decoration-none"
            >
              Developed with ❤ by raziwebdeveloper.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
