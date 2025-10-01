import React from "react";
import styled from "styled-components";

 const HoverCard = styled.div`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);
    }
  `;


  

const FilterBycomponent = ({ data }) => {
  if (!data || data.length === 0) return null;

 

  return (
    <>
      {data.map((x) => {
        const backgroundStyle = {
          backgroundImage: `url(${x.fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        };

        const handleClick = () => {
          window.open(x.link, "_blank", "noreferrer");
        };

        return (
          <div className="col " key={x.id}>
            <HoverCard className="card h-100 shadow-sm card-hover">
              {/* Imagen de fondo del proyecto */}
              <div className="card-img-top" style={backgroundStyle}></div>

              {/* Título principal */}
              <div className="card-header bg-dark text-white text-center">
                <h5 className="mb-0">{x.name}</h5>
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className="card-body">
                <h6 className="card-title">{x.name}</h6>
                <p className="card-text">{x.description}</p>

                {/* Tecnologías usadas */}
                <div className="mb-3">
                  <strong>Tecnologías usadas:</strong>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {x.images && x.images.length > 0 ? (
                      x.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Tecnología ${index}`}
                          className="img-thumbnail"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                      ))
                    ) : (
                      <p className="text-muted mb-0">No hay imágenes</p>
                    )}
                  </div>
                </div>

                {/* Botón para abrir el proyecto */}
                {x.link && (
                  <button
                    className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={handleClick}
                  >
                    <i className="fi fi-sr-play"></i> Ver proyecto
                  </button>
                )}
              </div>
            </HoverCard>
          </div>
        );
      })}
    </>
  );
};

export default FilterBycomponent;
