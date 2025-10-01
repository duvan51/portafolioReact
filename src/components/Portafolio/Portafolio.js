import React, { useEffect, useState } from "react";
import "./portafolio.css";
import info from "../servicesTabs/servicesData.js";
import FilterBycomponent from "./FilterBycomponent.js";
import FilterComponents from "./FilterComponents.js";
import { useTranslation } from "react-i18next";
import { getProyects, getCategorias } from "../../services/apiProyects.js";
import { lenguajesProyects } from "../../services/apiLenguajes.js";
import { useTheme } from "styled-components";

export const Portafolio = () => {
  const theme = useTheme();
  const [categorias, setCategorias] = useState([]);
  const [lenguajes, setLenguajes] = useState([]);
  const [selectedFilterId, setSelectedFilterId] = useState(0);
  const [selectedLanguages, setSelectedLanguages] = useState([]); // ⭐ ahora es un array
  const [ProyectsFirestore, setSetProyectsFirestore] = useState([]);

  const { t } = useTranslation();

  // proyectos de PocketBase
  useEffect(() => {
    getProyects()
      .then((res) => {
        setSetProyectsFirestore(res);
      })
      .catch((error) => {
        console.error("Error al obtener los proyectos:", error);
      });
  }, []);

  // categorías
  useEffect(() => {
    getCategorias()
      .then((res) => {
        setCategorias(res);
      })
      .catch((error) => {
        console.error("Error al obtener categorías:", error);
      });
  }, []);

  // lenguajes
  useEffect(() => {
    lenguajesProyects()
      .then((res) => {
        setLenguajes(res);
      })
      .catch((error) => {
        console.error("Error al obtener lenguajes:", error);
      });
  }, []);

  // ⭐ Manejo de filtros
  const handleCategoryClick = (value) => {
    setSelectedFilterId(value);
  };

  const handleLanguageClick = (id) => {
    setSelectedLanguages((prev) =>
      prev.includes(id) ? prev.filter((lang) => lang !== id) : [...prev, id]
    );
  };

  // ⭐ Aplicar filtros
  const filteredProjects = ProyectsFirestore.filter((project) => {
    const matchCategory =
      selectedFilterId === 0 || project.field === selectedFilterId;

    const matchLanguage =
      selectedLanguages.length === 0 ||
      selectedLanguages.some((lang) => project.field2?.includes(lang));

    return matchCategory && matchLanguage;
  });


  

  return (
    <div
      className="pt-4 pb-4"
      id="portafolio"
      style={{ backgroundColor: theme.backgroundSecondary }}
    >
      <div className="container pt-4 pb-4">
        <div className="text-center mb-4">
          <h1 className="text-uppercase">{t("mainProyects.proyectsTitle")}</h1>
          <p className="">{t("mainProyects.proyectsDescription")}</p>
        </div>

        <hr className="mb-5" />

        <div className="row flex-column-reverse flex-lg-row">
          {/* Filtros */}
          <div className="col-12 col-lg-3 order-1 order-lg-0 mb-4">
            {/* Categorías */}
            <div className="mb-4">
              <h5 className="fw-bold">Categorías</h5>
              <div className="d-flex flex-wrap gap-2">
                <button
                  className={`btn btn-sm btn-outline-primary ${
                    selectedFilterId === 0 ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(0)}
                >
                  All
                </button>
                {categorias.map((b) => (
                  <button
                    className={`btn btn-sm btn-outline-primary ${
                      selectedFilterId === b.id ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(b.id)}
                    key={b.id}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Lenguajes */}
            <div>
              <h5 className="fw-bold">Lenguajes</h5>
              <div className="d-flex flex-wrap gap-2">
                {lenguajes.map((lang) => (
                  <button
                    key={lang.id}
                    className={`btn btn-sm ${
                      selectedLanguages.includes(lang.id)
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handleLanguageClick(lang.id)}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Proyectos */}
          <div className="col-12 col-lg-9 order-0 order-lg-1">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {filteredProjects.map((x) => (
                <div className="col" key={x.id}>
                  <FilterComponents infor={x} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
