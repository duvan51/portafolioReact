import React, { useState, useCallback } from "react";
import { createProyect } from "../../services/apiProyects";
import Categorias from "./categorias";
import Tecnologias from "./tecnologias";
import "./addProyect.css";
import { useTheme } from "styled-components";

const AddProyects = () => {
  const theme = useTheme();
  const [imagePrev, setImagePrev] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [nombresTecnologias, setNombresTecnologias] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    fondoProyect: "",
    linkProyect: "",
    field2: [], // lenguajesProyects
    field: [], // categoriasProyects
  });

  console.log("esto se envia --> ", formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Manejo de tecnologías (field2)
  const usedTecnologies = useCallback((data) => {
    setFormData((prev) =>
      JSON.stringify(prev.field2) !== JSON.stringify(data.ids)
        ? { ...prev, field2: data.ids }
        : prev
    );
    setNombresTecnologias(data.nombres);
  }, []);

  // ✅ Manejo de categorías (field)
  const dataCategorias = useCallback((datos) => {
    // Si en tu UI solo se selecciona una categoría, toma el primer ID
    const singleRelation = Array.isArray(datos) ? datos[0] : datos;
    setFormData((prev) =>
      prev.field !== singleRelation ? { ...prev, field: singleRelation } : prev
    );
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ⚠️ Validar tamaño máximo (10 MB)
    const maxSizeMB = 10;
    const fileSizeMB = file.size / (1024 * 1024);

    if (fileSizeMB > maxSizeMB) {
      alert(
        `La imagen supera el límite de ${maxSizeMB} MB. Tamaño actual: ${fileSizeMB.toFixed(
          2
        )} MB`
      );
      e.target.value = "";
      return;
    }

    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => setImagePrev(reader.result);
    reader.readAsDataURL(file);
  };

  // ✅ Enviar datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();

      for (const key in formData) {
        const value = formData[key];

        if (key === "field2" && Array.isArray(value)) {
          // relación múltiple
          value.forEach((id) => form.append(key, id));
        } else if (key === "field") {
          // relación simple
          form.append(key, value);
        } else {
          form.append(key, value);
        }
      }

      if (imageFile) {
        form.append("fondoProyect", imageFile);
      }

      console.log("🟦 Enviando datos:");
      for (const [k, v] of form.entries()) console.log(k, v);

      await createProyect(form);

      alert("✅ Proyecto creado exitosamente!");
      setFormData({
        name: "",
        description: "",
        fondoProyect: "",
        linkProyect: "",
        LinkAlojado: "",
        field: "",
        field2: [],
      });
      setImageFile(null);
      setImagePrev(null);
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      alert("❌ Error al crear el proyecto");
    }
  };

  const style = {
    backgroundImage: `url(${imagePrev})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    width: "100%",
    borderRadius: "8px",
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: theme.backgroundSecondary }}
    >
      <div className="row">
        {/* Formulario */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <form
            onSubmit={handleSubmit}
            className="w-100 px-4"
            style={{ color: theme.colorPrimary }}
          >
            <h2 className="mb-4">Crear Proyecto</h2>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Link al Proyecto</label>
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
              <label className="form-label">Link al Git</label>
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

            <button type="submit" className="btn btn-primary w-100">
              Crear Proyecto
            </button>
          </form>
        </div>

        {/* Vista previa */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="shadow" style={style}>
            <div className="bg-dark bg-opacity-50 h-100 text-light p-4 d-flex flex-column justify-content-between rounded">
              <h3>{formData.name || "Sin Título"}</h3>
              <p>{formData.description || "Sin Descripción"}</p>
              <div>
                <div className="mt-3">
                  <strong>Tecnologías seleccionadas:</strong>{" "}
                  {nombresTecnologias.length > 0
                    ? nombresTecnologias.join(", ")
                    : "Ninguna seleccionada"}
                </div>
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
    </div>
  );
};

export default AddProyects;
