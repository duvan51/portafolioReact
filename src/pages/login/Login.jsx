import { useState } from "react";
import pb from "../../services/api.js"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await pb.admins.authWithPassword(email, password);
    alert("Inicio de sesión como administrador ✅");
    navigate("/adminHome");
  } catch (err) {
    console.error(err);
    alert("Credenciales incorrectas o no eres admin ❌");
  } finally {
    setLoading(false);
  }
};



  return (
     <div
      className="d-flex justify-content-center align-items-center vh-100 "
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        width: "100%"
      }}
    >
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Iniciar Sesión</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="form-control shadow-sm"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="form-control shadow-sm"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold shadow-sm"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="text-decoration-none text-primary fw-semibold">
              Regístrate
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
