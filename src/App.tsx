import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

import LoginView from "./microfrontends/LoginView";
import EstructuraPagina from "./components/EstructuraPagina";
import CourseInformationView from "./microfrontends/CourseInformationView";

const RedirectIfNotAuthenticated = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/home" element={<EstructuraPagina />} />
          <Route path="/course" element={<CourseInformationView />} />
        </Routes>
        <RedirectIfNotAuthenticated />
      </BrowserRouter>
    </div>
  );
}
export default App;
