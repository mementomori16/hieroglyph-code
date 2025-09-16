// src/routes/router.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"; // Import the new MainLayout component

import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import Services from "../components/pages/ServicesPage/Services";
import CardPage from "../components/pages/Card/CardPage/CardPage";
import Projects from "../components/pages/Projects/Projects";
import LegalInfo from "../components/pages/Attributions/Legal-info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Set MainLayout as the parent element
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "card", element: <CardPage /> },
      { path: "card/:id", element: <CardPage /> },
      { path: "contact", element: <Contact /> },
      { path: "legalinfo", element: <LegalInfo /> },
    ],
  },
]);

export default router;
