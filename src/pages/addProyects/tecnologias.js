import React, { useState, useEffect } from "react";
//import { getTecnologias } from "../../services/apiProyects";
import { lenguajesProyects } from "../../services/apiLenguajes.js";

const Tecnologias = ({ tecnologiasUsed }) => {
  const [tecnologias, setTecnologias] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);

  useEffect(() => {
    lenguajesProyects()
      .then((data) => {
        setTecnologias(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const chekbockSelect = (id) => {
    setSeleccionados((x) =>
      x.includes(id) ? x.filter((item) => item !== id) : [...x, id]
    );
  };

  useEffect(() => {
    // Filtrar las tecnologías seleccionadas
    const seleccionadas = tecnologias.filter((tec) =>
      seleccionados.includes(tec.id)
    );

    // Crear estructura con ids y nombres
    const dataToSend = {
      ids: seleccionadas.map((t) => t.id),
      nombres: seleccionadas.map((t) => t.name), // o t.nombre según tu campo real
    };

    // Enviar al padre
    tecnologiasUsed(dataToSend);
  }, [seleccionados, tecnologias, tecnologiasUsed]);




  return (
    <div className="d-flex w-full flex-wrap">
      {tecnologias.map((x) => (
        <div key={x.id} className="position-relative">
          <div className="">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id={`${x.id}`}
                value={`${x.id}`}
                onChange={() => chekbockSelect(x.id)}
                checked={seleccionados.includes(x.id)}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <div>
                  <div
                    className="w-1"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <img
                      src={`https://api.desarrollandoando.fun/api/files/${x.collectionId}/${x.id}/${x.image}`}
                      className="w-100 h-100"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tecnologias;
