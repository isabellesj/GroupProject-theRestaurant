import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Navigation = () => {
  const [navScrolled, setNavScrolled] = React.useState(false);
  const navEl = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 765) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary-custom fixed-top ${
          navScrolled ? "navbar-scrolled" : ""
        }`}
        ref={navEl}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Trattoria Bella Vita
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Hem
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pages/menu">
                  Meny
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pages/contact">
                  Kontakta oss
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pages/admin">
                  Admin
                </NavLink>
              </li>
              <button
                className="btn-outline-success"
                onClick={() => {
                  navigate("/pages/booking");
                }}
              >
                Boka
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
