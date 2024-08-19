import { useState, useEffect } from "react";
import User from "../assets/Svg/User.svg";
import Down from "../assets/Svg/Down.svg";
import CloseIcon from "../assets/Svg/Close.svg";
import Home from "../assets/Svg/Home.svg";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect scroll and set sticky class
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap's lg breakpoint is 992px
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle navbar collapse
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close the sidebar
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top d-flex flex-column ${
        isScrolled ? "scrolled" : ""
      } ${isNavOpen ? "nav-open" : ""}`}
    >
      <div className="container navigatin-border">
        {/* Toggler for small screens (right-aligned) */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={toggleNav}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          
            <img src={Home} alt="" srcset="" />
          
        </button>

        {/* Navbar collapse content */}
        <div
          className={`collapse navbar-collapse ${
            isNavOpen ? "show nav-open" : ""
          }`}
          id="navbarNav"
        >
          {/* Close button (only visible on mobile) */}
          <div className="d-flex align-items-end px-3 pt-3">
            <button
              className={`close-btn bg-transparent ${
                isNavOpen ? "d-block" : "d-none"
              } d-lg-none`}
              onClick={closeNav}
              aria-label="Close navigation"
            >
              <img src={CloseIcon} alt="Close" width={20} />
            </button>
          </div>

          <ul className="navbar-nav ms-auto">
            {/* Dropdown 1: Home */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="homeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PLACEHOLDER TITLE
                <img src={Down} alt="Down arrow" width={25} className="ms-1" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Sub-home 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sub-home 2
                  </a>
                </li>
              </ul>
            </li>

            {/* Dropdown 2: About */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PLACEHOLDER TITLE
                <img src={Down} alt="Down arrow" width={25} className="ms-1" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our Team
                  </a>
                </li>
              </ul>
            </li>

            {/* Dropdown 3: Services */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PLACEHOLDER TITLE
                <img src={Down} alt="Down arrow" width={25} className="ms-1" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Service 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Service 2
                  </a>
                </li>
              </ul>
            </li>

            {/* Sign In Button */}
            <li className="nav-item">
              <a
                href="#"
                className="btn btn-outline-light ms-3 rounded-5 fw-bolder button-sign-in"
              >
                <img src={User} alt="User" width={15} className="me-1" /> SIGN
                IN
              </a>
            </li>
          </ul>

          {/* Secondary Navigation */}
          <ul className="d-flex text-white gap-3 navbar-cust d-lg-none flex-column mt-3">
            <li className="list-group-item">Placeholder Title</li>
            <li className="list-group-item">Placeholder Title</li>
            <li className="list-group-item">Placeholder Title</li>
            <li className="list-group-item">Placeholder Title</li>
          </ul>
        </div>
      </div>

      {/* Secondary Row for larger screens */}
      <div className="container d-flex justify-content-end pt-3 d-none d-lg-flex">
        <ul className="d-flex text-white gap-3 navbar-cust">
          <li className="list-group-item">Placeholder Title</li>
          <li className="list-group-item">Placeholder Title</li>
          <li className="list-group-item">Placeholder Title</li>
          <li className="list-group-item">Placeholder Title</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
