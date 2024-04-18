import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
