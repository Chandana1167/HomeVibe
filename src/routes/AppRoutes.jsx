import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Inspiration from "../pages/Inspiration";
import RoomMakeover from "../pages/RoomMakeover";
import DIYIdeas from "../pages/DIYIdeas";
import Shop from "../pages/Shop";
import BeforeAfter from "../pages/BeforeAfter";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Publicly accessible Landing & Auth Gateways */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Strict Protected Ecosystem Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/inspiration" 
        element={
          <ProtectedRoute>
            <Inspiration />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/room-makeover" 
        element={
          <ProtectedRoute>
            <RoomMakeover />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/diy" 
        element={
          <ProtectedRoute>
            <DIYIdeas />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/shop" 
        element={
          <ProtectedRoute>
            <Shop />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/before-after" 
        element={
          <ProtectedRoute>
            <BeforeAfter />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />

      {/* Fallback 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;