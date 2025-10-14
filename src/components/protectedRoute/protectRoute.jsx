import { Navigate } from "react-router-dom";
import pb from "../../services/api.js"; // tu cliente

const ProtectedRoute = ({ children }) => {
  // si hay un usuario autenticado en PocketBase
  const isAuthenticated = pb.authStore.isValid;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
