import React, { useState } from "react";
import MyProjects from "./MyProjects.jsx";
import ManageCategories from "./ManageCategories";
import AddProyects from "../addProyects/addProyects.js";


export default function AdminHome() {
  const [activeSection, setActiveSection] = useState("projects");




  return (
    <div className="d-flex min-vh-100 bg-light w-100">
  {/* Sidebar 1/4 */}
  <div
    className="bg-dark text-white p-3 d-flex flex-column w-25"
    style={{ minHeight: "100vh" }}
  >
    <h4 className="text-center fw-bold mb-4">Admin Panel</h4>

    <nav className="nav flex-column h-auto">
      <button
        onClick={() => setActiveSection("create")}
        className={`btn mb-2 text-start ${
          activeSection === "create" ? "btn-secondary" : "btn-outline-light"
        }`}
      >
        ➕ Create Project
      </button>

      <button
        onClick={() => setActiveSection("projects")}
        className={`btn mb-2 text-start ${
          activeSection === "projects" ? "btn-secondary" : "btn-outline-light"
        }`}
      >
        📋 My Projects
      </button>

      <button
        onClick={() => setActiveSection("categories")}
        className={`btn mb-2 text-start ${
          activeSection === "categories"
            ? "btn-secondary"
            : "btn-outline-light"
        }`}
      >
        🧠 Manage Categories
      </button>
    </nav>
  </div>

  {/* Contenido principal 3/4 */}
  <div className="flex-grow-1 w-75 p-4">
    {activeSection === "create" && <AddProyects />}
    {activeSection === "projects" && <MyProjects />}
    {activeSection === "categories" && <ManageCategories /> }
  </div>
</div>
  );
}
