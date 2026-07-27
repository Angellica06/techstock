import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Produtos from "../pages/Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
