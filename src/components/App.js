import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ListTodosPage from "../pages/ListTodosPage";
import LoginPage from "../pages/LoginPage";
import WelcomePage from "../pages/WelcomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome/:username" element={<WelcomePage />} />
          <Route path="/todos" element={<ListTodosPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
