import React, { useState, useEffect } from 'react';
import { getCategorias } from '../../services/apiProyects.js';

const Categorias = ({ dataCategorias }) => {
  const [categorias, setCategorias] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState('');

  useEffect(() => {
    getCategorias()
      .then((data) => {
        setCategorias(data);
        console.log("datas---->",data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCheckboxChange = (id) => {
    let nuevas;
    if (seleccionadas.includes(id)) {
      nuevas = seleccionadas.filter((cat) => cat !== id);
    } else {
      nuevas = [...seleccionadas, id];
    }
    setSeleccionadas(nuevas);
    dataCategorias(nuevas); // <- se envía al padre
  };

  const handleNuevaCategoria = () => {
    if (nuevaCategoria.trim() === '') return;
    const nueva = {
      id: Date.now().toString(),
      name: nuevaCategoria,
    };
    setCategorias([...categorias, nueva]);
    setNuevaCategoria('');
    setShowModal(false);
  };

  return (
    <div className="w-100 bg-light border p-3 rounded">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-bold">Categorías</span>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => setShowModal(true)}
        >
          Seleccionar
        </button>
      </div>

      <div className="d-flex flex-wrap gap-2">
        {seleccionadas.length === 0 ? (
          <span className="text-muted">Ninguna seleccionada</span>
        ) : (
          seleccionadas.map((id) => {
            const cat = categorias.find((x) => x.id === id);
            return (
              <span key={id} className="badge bg-primary text-white">
                {cat?.name || 'Desconocida'}
              </span>
            );
          })
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Seleccionar Categorías</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {categorias.length === 0 && (
                  <p className="text-muted">Cargando categorías...</p>
                )}
                <div className="form-check">
                  {categorias.map((x) => (
                    <div key={x.id} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={seleccionadas.includes(x.id)}
                        onChange={() => handleCheckboxChange(x.id)}
                        id={`check-${x.id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`check-${x.id}`}
                      >
                        {x.name}
                      </label>
                    </div>
                  ))}
                </div>
                <hr />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nueva categoría"
                  value={nuevaCategoria}
                  onChange={(e) => setNuevaCategoria(e.target.value)}
                />
                <button
                  className="btn btn-outline-success mt-2"
                  onClick={handleNuevaCategoria}
                >
                  Añadir nueva categoría
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        
          
        </div>
      )}
    </div>
  );
};

export default Categorias;
