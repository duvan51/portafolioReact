import React, { useState, useEffect, useCallback } from "react";
import { updateProyect } from "../../services/apiProyects.js";
import Categorias from "../addProyects/categorias.js";
import Tecnologias from "../addProyects/tecnologias.js";
import pb from "../../services/api.js";

const EditProyectModal = ({ show, onClose, projectData, onUpdated }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    fondoProyect: "",
    linkProyect: "",
    LinkAlojado: "",
    field: "",
    field2: [],
  });
  const [imagePrev, setImagePrev] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [nombresTecnologias, setNombresTecnologias] = useState([]);

  useEffect(() => {
    if (projectData) {
      setFormData({
        name: projectData.name || "",
        description: projectData.description || "",
        fondoProyect: projectData.fondoProyect || "",
        linkProyect: projectData.linkProyect || "",
        LinkAlojado: projectData.LinkAlojado || "",
        field: projectData.field || "",
        field2: projectData.field2 || [],
      });

      if (projectData.fondoProyect)
        setImagePrev(pb.getFileUrl(projectData, projectData.fondoProyect));
    }
  }, [projectData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePrev(reader.result);
    reader.readAsDataURL(file);
  };

  const dataCategorias = useCallback((datos) => {
    const singleRelation = Array.isArray(datos) ? datos[0] : datos;
    setFormData((prev) => ({ ...prev, field: singleRelation }));
  }, []);

  const usedTecnologies = useCallback((data) => {
    setFormData((prev) => ({ ...prev, field2: data.ids }));
    setNombresTecnologias(data.nombres);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      for (const key in formData) {
        const value = formData[key];
        if (key === "field2" && Array.isArray(value))
          value.forEach((id) => form.append(key, id));
        else form.append(key, value);
      }
      if (imageFile) form.append("fondoProyect", imageFile);

      await updateProyect(projectData.id, form);
      alert("✅ Proyecto actualizado correctamente");
      onUpdated(); // recarga la lista
      onClose();
    } catch (err) {
      console.error("Error al actualizar:", err);
      alert("❌ No se pudo actualizar el proyecto");
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Proyecto</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Columna Izquierda */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-control"
                      rows="3"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Link del Proyecto</label>
                    <input
                      type="url"
                      name="linkProyect"
                      value={formData.linkProyect}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Link Git</label>
                    <input
                      type="url"
                      name="LinkAlojado"
                      value={formData.LinkAlojado}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Imagen de fondo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImage}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <Categorias dataCategorias={dataCategorias} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Tecnologías</label>
                    <Tecnologias tecnologiasUsed={usedTecnologies} />
                  </div>
                </div>

                {/* Columna Derecha - Vista previa */}
                <div className="col-md-6">
                  <div
                    className="shadow"
                    style={{
                      backgroundImage: `url(${imagePrev})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "500px",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="bg-dark bg-opacity-50 text-light p-4 h-100 d-flex flex-column justify-content-between rounded">
                      <h3>{formData.name || "Sin título"}</h3>
                      <p>{formData.description || "Sin descripción"}</p>
                      <div>
                        <strong>Tecnologías:</strong>{" "}
                        {nombresTecnologias.length > 0
                          ? nombresTecnologias.join(", ")
                          : "Ninguna seleccionada"}
                      </div>
                      {formData.linkProyect && (
                        <a
                          href={formData.linkProyect}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-light mt-3"
                        >
                          Ver Proyecto
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-end mt-4">
                <button type="submit" className="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProyectModal;
