import React from "react";
import "./aboutme.css";

import image from "../images/pef.png";
import servicesDataInfo from "../servicesTabs/servicesDataInfo";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

export const AboutMe = () => {
  const { t } = useTranslation();
   const theme = useTheme();

  return (
    <div className="py-5  w-100" style={{ backgroundColor: theme.backgroundSecondary }} id="aboutme">
      <div className="container">
        {/* Título y frase */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: theme.colorPrimary }}>{t("mainAboutMe.aboutMeTitle")}</h2>
          <p className="lead ">{t("mainAboutMe.aboutMePhrase")}</p>
          <hr className="w-25 mx-auto" />
        </div>

        {/* Contenido principal: imagen + info */}
        <div className="row align-items-center pt-5">
          {/* Foto */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="position-relative d-inline-block">
              <img
                src={image}
                alt="Foto personal"
                className="img-fluid rounded-circle border border-3 border-primary"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
              {/* Decoración en círculo */}
              <div
                className="position-absolute top-0 start-0 translate-middle border border-4  rounded-circle"
                style={{ width: "280px", height: "280px", zIndex: -1, borderColor: theme.colorSecondary }}
              ></div>
            </div>
          </div>

          {/* Información personal */}
          <div className="col-md-7">
            <h3 className="fw-bold text-uppercase mb-3">
              {t("mainAboutMe.aboutMeDescriptionTitle")}
            </h3>
            <p className="mb-4">
              {t("mainAboutMe.aboutMeDescriptionDescription")}
            </p>

            <div className="row row-cols-1 row-cols-sm-2 g-3">
              <div>
                <strong>{t("mainAboutMe.Name").toUpperCase()}</strong>
                <div>
                  {servicesDataInfo.first_name} {servicesDataInfo.last_name}
                </div>
              </div>
              <div>
                <strong>{t("mainAboutMe.Email").toUpperCase()}</strong>
                <div>{servicesDataInfo.email}</div>
              </div>
              <div>
                <strong>{t("mainAboutMe.Phone").toUpperCase()}</strong>
                <div>{servicesDataInfo.telephone}</div>
              </div>
              <div>
                <strong>{t("mainAboutMe.Linkendln").toUpperCase()}</strong>
                <div>
                  <a
                    href="https://www.linkedin.com/in/duvan-aponte-ramirez-269738189"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    @Duvan_Aponte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
