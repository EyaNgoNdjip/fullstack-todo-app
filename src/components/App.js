import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import WelcomePage from "../pages/WelcomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
