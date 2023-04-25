import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Layout = ({ children }) => {
  const [navbarActive, setNavbarActive] = useState(false);

  function toggleNavbar() {
    setNavbarActive(!navbarActive);
  }
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="overlay"></div>

          <a href="/">
            <h1 className="logo">CanAus Nepal</h1>
          </a>

          <nav className={`navbar ${navbarActive ? "active" : ""}`}>
            <div className="navbar-top">
              <a href="/" className="logo">
                CanAus
              </a>

              <button
                className="nav-close-btn"
                aria-label="Close Menu"
                onClick={toggleNavbar}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/#home" className="navbar-link" onClick={toggleNavbar}>
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#about" className="navbar-link" onClick={toggleNavbar}>
                  About
                </a>
              </li>

              <li className="navbar-item">
                <a
                  href="/#services"
                  className="navbar-link"
                  onClick={toggleNavbar}
                >
                  Services
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#training" className="navbar-link" onClick={toggleNavbar}>
                  Training
                </a>
              </li>

              <li className="navbar-item">
                <a href="#bottomfooter" className="navbar-link" onClick={toggleNavbar}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* <a href="/appointment" className="btn">
            <ion-icon
              name="chevron-forward-outline"
              aria-hidden="true"
            ></ion-icon>

            <span>Book an Apointment</span>
          </a> */}

          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            onClick={toggleNavbar}
          >
            {!navbarActive ? <IoMenuOutline /> : <RxCross1 />}
          </button>
        </div>
      </header>
      {children}
      <footer className="footer" id="bottomfooter">
        <div className="footer-top section">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                CanAus
              </a>

              <p className="text">
                CanAus consultancy provides expert study abroad services,
                including university selection, test prep, visa assistance, and
                pre-departure preparation.
              </p>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Our links</p>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>

              <li>
                <a href="#training" className="footer-link">
                  Training
                </a>
              </li>

              <li>
                <a href="#destinations" className="footer-link">
                  Destinations
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Follow us on</p>
              </li>

              <li>
                <a href="https://facebook.com" className="footer-link">
                  Facebook
                </a>
              </li>

              <li>
                <a href="https://instagram.com" className="footer-link">
                  Instagram
                </a>
              </li>

              <li>
                <a href="https://linkedin.com" className="footer-link">
                  Linkedin
                </a>
              </li>

              <li>
                <a href="https://youtube.com" className="footer-link">
                  Youtube
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>

              <li className="footer-item">
                <div>
                  <a href="tel:+2484214313" className="footer-item-link">
                    9851131509
                  </a>
                </div>
              </li>

              <li className="footer-item">
                <div>
                  <a
                    href="mailto:info.canausconsulting@gmail.com"
                    className="footer-item-link"
                  >
                    info.canausconsulting@gmail.com
                  </a>
                </div>
              </li>

              <li className="footer-item">
                <address className="footer-item-link">
                  Putalisadak, Kathmandu
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright"></p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
