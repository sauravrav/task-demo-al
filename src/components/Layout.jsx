import { useState } from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube, IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io5";

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
            <h1 className="logo">Aakash Labs</h1>
          </a>

          <nav className={`navbar ${navbarActive ? "active" : ""}`}>
            <div className="navbar-top">
              <a href="/" className="logo">
                Aakash Labs
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
                  Slider
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#about" className="navbar-link" onClick={toggleNavbar}>
                  AboutUs
                </a>
              </li>

              <li className="navbar-item">
                <a
                  href="/#our-team"
                  className="navbar-link"
                  onClick={toggleNavbar}
                >
                  Our Team
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#contact-form" className="navbar-link" onClick={toggleNavbar}>
                  Contact Form
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#bottomfooter" className="navbar-link" onClick={toggleNavbar}>
                  Footer
                </a>
              </li>
            </ul>
          </nav>

          <a href="/free-api" className="btn">
            <span>Free Api</span>
          </a>

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
                Aakash Labs
              </a>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum exercitationem nesciunt autem fugit consequatur debitis. Earum.
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
                <a href="#our-team" className="footer-link">
                  Our Team
                </a>
              </li>

              <li>
                <a href="#contact-form" className="footer-link">
                  Contact Form
                </a>
              </li>
              <li>
              <a href="/free-api" className="footer-link">
                Free Api
              </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Follow us on</p>
              </li>

              <li>
                <a href="https://facebook.com" className="footer-link">
                  <IoLogoFacebook style={{height:'40px',width:'40px'}} />
                </a>
              </li>

              <li>
                <a href="https://instagram.com" className="footer-link">
                  <IoLogoInstagram style={{height:'40px',width:'40px'}} />
                </a>
              </li>

              <li>
                <a href="https://linkedin.com" className="footer-link">
                <IoLogoLinkedin style={{height:'40px',width:'40px'}} />
                </a>
              </li>

              <li>
                <a href="https://youtube.com" className="footer-link">
                <IoLogoYoutube style={{height:'40px',width:'40px'}} />
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
                    98123456789
                  </a>
                </div>
              </li>

              <li className="footer-item">
                <div>
                  <a
                    href="mailto:info.canausconsulting@gmail.com"
                    className="footer-item-link"
                  >
                    info@email.com
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
