import React from "react";
import "./redes.css";
import { useParallax } from "react-scroll-parallax";
import { useTheme } from "styled-components";

const Redes = () => {
  const theme = useTheme();

  return (
    <div className="mainOneContenidoRedes" style={{ color: theme.colorPrimary }}>
      <ul className="listRedes" style={{ color: theme.colorSecondary }}>
        <a href="https://www.linkedin.com/in/duvan-aponte-269738189">
          <i className="fi fi-brands-linkedin" style={{ color: theme.colorSecondary }}></i>
        </a>
        <a href="https://www.facebook.com/duvan.aponteramirez">
          <i className="fi fi-brands-facebook" style={{ color: theme.colorSecondary }}></i>
        </a>
        <a href="https://wa.link/g9kp4t">
          <i className="fi fi-brands-whatsapp" style={{ color: theme.colorSecondary }}></i>
        </a>
        <a href="https://github.com/duvan51/">
          <i className="fi fi-brands-github" style={{ color: theme.colorSecondary }}></i>
        </a>
        <a href="tel:3132012218">
          <i className="fi fi-sr-phone-call" style={{ color: theme.colorSecondary }}></i>
        </a>
      </ul>
    </div>
  );
};

export default Redes;
