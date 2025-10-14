import "./nav.css";
import Logo from "../logo/Logo";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "styled-components";

const Nav = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [buttonMenu, setButtonMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMenuVisible = buttonMenu || screenWidth > 768;

  const handleCloseMenu = () => {
    if (screenWidth <= 768) setButtonMenu(false);
  };

  return (
    <nav
      style={{
        backgroundColor: theme.backgroundPrimary,
        color: theme.colorPrimary,
      }}
      className="navbar navbar-expand-md  border-bottom px-3"
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Logo />
        <button
          className="btn d-md-none"
          onClick={() => setButtonMenu(!buttonMenu)}
        >
          <i className="fi fi-br-list fs-4"></i>
        </button>
      </div>

      {isMenuVisible && (
        <div className="container-fluid">
          <ul className="navbar-nav flex-md-row flex-column gap-3 mt-3 mt-md-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={handleCloseMenu}
                style={{ color: theme.colorPrimary }}
              >
                {t("headersMenu.home").toUpperCase()}
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={handleCloseMenu}
                style={{ color: theme.colorPrimary }}
              >
                {t("headersMenu.menuServices").toUpperCase()}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#aboutme"
                onClick={handleCloseMenu}
                style={{ color: theme.colorPrimary }}
              >
                {t("headersMenu.menuAbout").toUpperCase()}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#portafolio"
                onClick={handleCloseMenu}
                style={{ color: theme.colorPrimary }}
              >
                {t("headersMenu.menuProyects").toUpperCase()}
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/tutorials"
                onClick={handleCloseMenu}
                style={{ color: theme.colorPrimary }}
              >
                {t("headersMenu.menuBlog").toUpperCase()}
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#cont"
                onClick={handleCloseMenu}
                style={{ color: theme.colorPrimary }}
              >
                {t("headersMenu.menuContact").toUpperCase()}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
