import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ListTodosPage from "../pages/ListTodosPage";
import LoginPage from "../pages/LoginPage";
import WelcomePage from "../pages/WelcomePage";
import HeaderPage from "../pages/HeaderPage";
import FooterPage from "../pages/FooterPage";
import LogoutPage from "../pages/LogoutPage";

const App = () => {
  return (
    <div>
      <HeaderPage />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome/:username" element={<WelcomePage />} />
          <Route path="/todos" element={<ListTodosPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <FooterPage />
    </div>
  );
};

export default App;
