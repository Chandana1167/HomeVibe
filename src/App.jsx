import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// 1. Context & Route Guards
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// 2. Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Inspiration from "./pages/Inspiration";
import DIYIdeas from "./pages/DIYIdeas";
import BeforeAfter from "./pages/BeforeAfter";
import RoomMakeover from "./pages/RoomMakeover";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Authentication / Entry Portals */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Authenticated Dashboard Core Pages */}
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
          path="/before-after"
          element={
            <ProtectedRoute>
              <BeforeAfter />
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
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* 404 Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}