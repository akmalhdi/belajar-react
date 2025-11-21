import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/user" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
