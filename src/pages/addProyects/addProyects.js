import React, { useState, useCallback } from "react";
import { crearPost } from "../../services/apiFirestore.js";
import { uploadImageToCloudinary } from "../../services/cloudinary";
import Categorias from "./categorias";
import Tecnologias from "./tecnologias";
import "./addProyect.css";
import { useTheme } from "styled-components";

const AddProyects = () => {
  const theme = useTheme();
  const [imagePrev, setImagePrev] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    background: "",
    linkProyect: "",
    lenguajesProyects: [],
    categoriasProyects: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const usedTecnologies = useCallback((datos) => {
    setFormData((prev) =>
      JSON.stringify(prev.lenguajesProyects) !== JSON.stringify(datos)
        ? { ...prev, lenguajesProyects: datos }
        : prev
    );
  }, []);

  const dataCategorias = useCallback((datos) => {
    setFormData((prev) =>
      JSON.stringify(prev.categoriasProyects) !== JSON.stringify(datos)
        ? { ...prev, categoriasProyects: datos }
        : prev
    );
  }, []);






  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => setImagePrev(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = "";

      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
      }

      const dataToSend = {
        ...formData,
        background: imageUrl,
      };

      await crearPost(dataToSend);
      alert("¡Proyecto creado exitosamente!");
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      alert("Error al crear el proyecto");
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
    <div className="container-fluid py-5" style={{ backgroundColor: theme.backgroundSecondary }}>
      <div className="row">
        {/* Formulario */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="w-100 px-4" style={{ color: theme.colorPrimary}}>
            <h2 className=" mb-4">Crear Proyecto</h2>

            <div className="mb-3">
              <label className="form-label " style={{ color: theme.colorPrimary}}>Nombre</label>
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
              <label className="form-label" >Descripción</label>
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
              <label className="form-label ">Link al Proyecto</label>
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
              <label className="form-label ">Imagen de fondo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label ">Categoría</label>
              <Categorias dataCategorias={dataCategorias} />
            </div>

            <div className="mb-3">
              <label className="form-label ">Tecnologías</label>
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
                <strong>Tecnologías:</strong>{" "}
                {formData.lenguajesProyects.length > 0 ? formData.lenguajesProyects.join(", ") : "Ninguna"}
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
