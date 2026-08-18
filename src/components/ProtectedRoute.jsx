import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Displays your beautiful glassmorphic spinning loader while fetching the session status from Supabase
  if (loading) {
    return <Loading />;
  }

  // Strictly forces unauthenticated guests back to the custom registration/login flow
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}