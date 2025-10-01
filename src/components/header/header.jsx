import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";
import { themes } from "../../theme";

const Header = ({ setCurrentTheme }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Tema inicial desde localStorage o por defecto "purple"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "purple");
  const [showLang, setShowLang] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  // Sincronizar tema con ThemeProvider y localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    setCurrentTheme(themes[theme] || themes.purple);
  }, [theme, setCurrentTheme]);

  // Cambiar idioma
  const changeLanguage = (lng) => {
    localStorage.setItem("idioma", lng);
    i18n.changeLanguage(lng);
  };

  // Logout
  const exit = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="bg-light border-bottom shadow-sm w-100">
      <div className="container py-2 d-flex justify-content-between align-items-center flex-wrap gap-3">
        {/* Botón de logout */}
        <button className="btn btn-outline-danger" onClick={exit}>
          <i className="fi fi-sr-sign-out-alt me-2"></i> Salir
        </button>

        {/* Temas */}
        <button
          className="btn btn-outline-primary d-flex align-items-center gap-2 px-4 py-2 fs-5"
          onClick={() => setShowThemes(true)}
          style={{ cursor: "pointer" }}
        >
          <i className="fi fi-sr-palette"></i>
          Themes
        </button>

        {/* Modal de temas con círculo cromático */}
        {showThemes && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
            onClick={() => setShowThemes(false)}
          >
            <div
              className="bg-white rounded-circle p-5 position-relative shadow"
              style={{
                width: "300px",
                height: "300px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h6 className="position-absolute top-50 start-50 translate-middle text-center">
                Choose
                <br />
                Theme
              </h6>

              {Object.keys(themes).map((t, index, arr) => {
                const total = arr.length;
                const angle = (360 / total) * index;
                const radius = 110; // radio de la circunferencia
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <button
                    key={t}
                    title={t}
                    onClick={() => {
                      setTheme(t);
                      setShowThemes(false);
                    }}
                    className="position-absolute border border-2"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: themes[t].backgroundPrimary,
                      borderColor:
                        theme === t
                          ? themes[t].colorSecondary
                          : "rgba(0,0,0,0.2)",
                      borderRadius: "50%",
                      top: `calc(50% + ${y}px - 25px)`,
                      left: `calc(50% + ${x}px - 25px)`,
                      cursor: "pointer",
                      transition: "transform 0.3s",
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Selector de idioma */}
        <button
          className="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 py-2 fs-5"
          onClick={() => setShowLang(true)}
          style={{ cursor: "pointer" }}
        >
          <i className="fi fi-sr-globe"></i>
          LN
        </button>

        {/* Modal personalizado */}
        {showLang && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
            onClick={() => setShowLang(false)} // cerrar al hacer clic fuera
          >
            <div
              className="bg-white rounded p-4 shadow"
              style={{ minWidth: "250px" }}
              onClick={(e) => e.stopPropagation()} // evitar que se cierre al hacer clic dentro
            >
              <h5 className="mb-3 text-center">Select Language</h5>
              <button
                className="btn btn-primary w-100 mb-2"
                onClick={() => {
                  changeLanguage("en");
                  setShowLang(false);
                }}
              >
                English (EN)
              </button>
              <button
                className="btn btn-primary w-100"
                onClick={() => {
                  changeLanguage("es");
                  setShowLang(false);
                }}
              >
                Español (ES)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Nav */}
      <Nav />
    </header>
  );
};

export default Header;
