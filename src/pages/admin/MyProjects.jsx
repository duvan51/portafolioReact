import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { getProyects, deleteCategorias } from "../../services/apiProyects.js";

import EditProyectModal from "./EditProyectModal.jsx";

const MyProjects = () => {
  const theme = useTheme();
  const [proyects, setProyects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProyects()
      .then((res) => {
        setProyects(res);
      })
      .catch((error) => {
        console.error("Error al obtener los proyectos:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    console.log(typeof id, id);

    if (window.confirm("¿Seguro que deseas eliminar este proyecto?")) {
      try {
        await deleteCategorias(id);
        // Actualizar el estado local para remover el registro de la tabla
        setProyects(proyects.filter((p) => p.id !== id));

        // ✅ Alerta de confirmación
        alert("✅ Proyecto eliminado correctamente.");
      } catch (error) {
        console.error("Error al eliminar:", error);
        alert("❌ No se pudo eliminar el registro. Verifica si aún existe.");
      }
    }
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: theme.backgroundSecondary,
        color: theme.colorPrimary,
        minHeight: "100vh",
      }}
    >
      <h3 className="mb-4">My Projects</h3>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {proyects.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No projects found.
                </td>
              </tr>
            ) : (
              proyects.map((project, index) => (
                <tr key={project.id}>
                  <td>{index + 1}</td>
                  <td>{project.name}</td>
                  <td>{project.category || "N/A"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(project)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(project.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      <EditProyectModal
        show={showModal}
        onClose={() => setShowModal(false)}
        projectData={selectedProject}
        onUpdated={() => window.location.reload()}
      />
    </div>
  );
};

export default MyProjects;
