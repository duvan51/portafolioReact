import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lenguajesProyects } from "../../services/apiLenguajes.js";
import { LuFolderGit2 } from "react-icons/lu";

const HoverCard = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);
  }
`;

const FilterComponents = ({ infor }) => {
  const [data, setData] = useState(null);
  const [lenguajes, setLenguajes] = useState([]);

  useEffect(() => {
    lenguajesProyects()
      .then((res) => {
        setLenguajes(res);
      })
      .catch((error) => {
        console.error("Error al obtener lenguajes:", error);
      });
  }, []);

 // console.log(lenguajes);

  useEffect(() => {
    setData(infor);
  }, [infor]);

  if (!data) {
    return null; // No mostrar nada si no hay datos
  }

  const backgroundStyle = {
    backgroundImage: `url(https://api.desarrollandoando.fun/api/files/postsProyects/${data.id}/${data.fondoProyect})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "200px",
  };

  return (
    <HoverCard className="card h-100 shadow-sm">
      {/* Fondo del proyecto */}
      <div className="card-img-top" style={backgroundStyle}></div>

      {/* Nombre del proyecto */}
      <div className="card-header bg-dark text-white text-center">
        <h5 className="mb-0">{data.name || "Sin Nombre"}</h5>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="card-body d-flex flex-column justify-content-around">
        <h6 className="card-title">{data.name || "Sin Título"}</h6>
        <p
          className="card-text"
          style={{
            fontSize: "12px",
            maxHeight: "80px", // altura máxima fija
            overflowY: "auto", // scroll vertical si excede
            whiteSpace: "normal",
          }}
        >
          {data.description || "Sin Descripción"}
        </p>

        {/* Tecnologías usadas */}
        <div className="mb-3">
          <strong>Tecnologías usadas:</strong>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {lenguajes && lenguajes.length > 0 ? (
              lenguajes
                .filter((lang) =>
                  // 👈 Compara si el lenguaje está en las tecnologías del proyecto
                  infor.field2?.includes(lang.id)
                )
                .map((lang) => (
                  <img
                    key={lang.id}
                    src={`https://api.desarrollandoando.fun/api/files/lenguajesProyects/${lang.id}/${lang.image}`}
                    alt={lang.name}
                    className="img-thumbnail"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                ))
            ) : (
              <p className="text-muted mb-0">No hay imágenes disponibles</p>
            )}
          </div>
        </div>

        <div className="d-flex w-100 gap-2">
          {/* Enlace al proyecto (80%) */}
          {data.linkProyect && (
            <a
              className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
              href={data.linkProyect}
              target="_blank"
              rel="noreferrer"
              style={{ flex: 8 }}
            >
              <i className="fi fi-sr-play"></i>
              Ver proyecto
            </a>
          )}

          {/* Enlace alojado (20%) */}
          {data.LinkAlojado && (
            <a
              className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
              href={data.LinkAlojado}
              target="_blank"
              rel="noreferrer"
              style={{ flex: 2 }}
            >
              <LuFolderGit2 />
            </a>
          )}
        </div>
      </div>
    </HoverCard>
  );
};

export default FilterComponents;
