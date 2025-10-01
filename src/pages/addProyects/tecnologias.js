import React, { useState, useEffect } from "react";
//import { getTecnologias } from "../../services/apiProyects";
import { getLenguajes } from "../../services/apiFirestore.js";




const Tecnologias = ({ tecnologiasUsed }) => {
  const [tecnologias, setTecnologias] = useState([]);
  const [seleccionados, setSeleccionados]= useState([])

  useEffect(() => {
    getLenguajes()
      .then((data) => {
        setTecnologias(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);





  const chekbockSelect= (id)=>{
    setSeleccionados(x=>
        x.includes(id) ? x.filter(item => item !== id) : [...x, id]
    )
  }

  
  useEffect(() => {
    tecnologiasUsed(seleccionados);
  }, [seleccionados, tecnologiasUsed]);




 
 

  return (
    <div className="d-flex w-75">
      {tecnologias.map((x) => (
        <div key={x.id} className="position-relative">
          <div className="">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id={`${x.id}`}
                value={`${x.id}`}
                onChange={()=> chekbockSelect(x.id)}
                checked={seleccionados.includes(x.id)}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <div>
                  <div
                    className="w-1"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <img
                      src={`${x.image}`}
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
