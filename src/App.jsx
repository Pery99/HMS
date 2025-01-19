import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminBookings from "./pages/admin/Bookings";
import AdminRooms from "./pages/admin/Rooms";
import AdminUsers from "./pages/admin/Users";
import Login from "./pages/admin/Login";
import GuestsPage from './pages/admin/GuestsPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import RevenuePage from './pages/admin/RevenuePage';
import SettingsPage from './pages/admin/SettingsPage';

// Simple auth check - replace with your actual auth logic
const isAuthenticated = () => {
  return localStorage.getItem("adminToken") !== null;
};

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

const App = () => {
  return (
    <div className="font-poppins">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="rooms" element={<AdminRooms />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="guests" element={<GuestsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="revenue" element={<RevenuePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
