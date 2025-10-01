import React, { useEffect, useState } from "react";
import VideoSlider from "./VideoSlider"; // Reemplaza con la ruta correcta
import { getTutorials, getTutorialsId } from "../../services/api.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import imgeScary from "../../components/images/morado.png";
import { ImMug } from "react-icons/im";
import { ImYelp } from "react-icons/im";
import { ImUserCheck } from "react-icons/im";
import { ImMoveUp } from "react-icons/im";

const App = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    // Llama a la función de servicio para obtener productos
    getTutorials()
      .then((data) => {
        // Maneja los datos obtenidos
        setTutorials(data);
      })
      .catch((error) => {
        // Maneja los errores
        console.error(error);
      });
  }, []);



  return (
    <div className="tutorials">
      <div>
        <div className="">
          <img
            src={imgeScary}
            alt="Banner Academia"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div>
        <div className="container my-5">
          <h2>Tutoriales y Cursos</h2>

          <div className="container my-4">
            <div className="row g-4">
              {tutorials.map(
                (tutorial) => (
                  console.log(tutorial),
                  (
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="card h-100 shadow-sm">
                        <img
                          src="https://placehold.co/300x180"
                          className="card-img-top"
                          alt="Curso React"
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title text-primary">
                            {tutorial.name}
                          </h5>
                          <p
                            className="card-text flex-grow-1"
                            style={{
                              maxHeight: "60px", // altura fija
                              overflow: "hidden", // oculta el exceso
                              textOverflow: "ellipsis", // puntos suspensivos
                              display: "-webkit-box", // soporte multi-línea
                              WebkitLineClamp: 3, // máximo 3 líneas
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {tutorial.description}
                          </p>
                          <a href="#" className="btn btn-primary w-100 mt-auto">
                            Ver más
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/** <VideoSlider /> */}
      <div className="w-100">
        <h2>Descubre los mejores cursos tips y tutoriales onnline</h2>
        <p>
          Tenemos cursos onnline que te ayudaran en tu vida diaria y/o
          profesional
        </p>
      </div>

      <div>
        <h2> Aprendiendo con Desarrollando </h2>

        <div className="container my-5">
          <div className="row text-center">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="p-4 border rounded h-100 bg-light">
                <div className="mb-3 fs-3">
                  <ImMug />
                </div>
                <h5 className="fw-bold">Expertos</h5>
                <p className="text-muted">
                  Tu equipo aprenderá de profesionales reconocidos de
                  Latinoamérica y España.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="p-4 border rounded h-100 bg-light">
                <div className="mb-3 fs-3">
                  <ImYelp />
                </div>
                <h5 className="fw-bold">En tu tiempo</h5>
                <p className="text-muted">
                  Todo nuestro contenido es grabado y está online, por lo que tu
                  equipo podrá verlo en cualquiera de sus dispositivos y en el
                  momento que prefieran.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="p-4 border rounded h-100 bg-light">
                <div className="mb-3 fs-3">
                  <ImUserCheck />
                </div>
                <h5 className="fw-bold">Calidad</h5>
                <p className="text-muted">
                  Los videos son de máxima calidad producidos por el equipo
                  audiovisual de
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="p-4 border rounded h-100 bg-light">
                <div className="mb-3 fs-3">
                  <ImMoveUp />
                </div>
                <h5 className="fw-bold">N°1 en el mercado</h5>
                <p className="text-muted">
                  Alineados a las tendencias del mercado laboral, nuestros
                  cursos están en constante actualización para que tu equipo
                  esté siempre a la vanguardia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**start footer */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(31, 34, 53)", color: "white" }}
      >
        <footer className="py-5 h-auto">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex">
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex">
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2 mt-5">
              <h5>Section</h5>
              <ul className="nav flex">
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2 w-100">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            className="d-flex justify-content-between py-4 my-4 border-top"
            style={{ borderColor: "white" }}
          >
            <p>© 2025 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-white" href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-white" href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-white" href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      {/**end footer */}
    </div>
  );
};

export default App;
