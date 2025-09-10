import { createBrowserRouter, Navigate } from "react-router-dom";
import NavBarWrapper from "../layouts/NavBarWrapper";

import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import Services from "../components/pages/ServicesPage/Services";
import CardPage from "../components/pages/Card/CardPage/CardPage";
import Attributions from "../components/pages/Attributions/Attributions";
import Testimonials from "../components/pages/Testimonials/Testimonials";
import Projects from "../components/pages/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "card", element: <CardPage /> },
      { path: "card/:id", element: <CardPage /> },
      { path: "contact", element: <Contact /> },
      { path: "attributions", element: <Attributions /> },
    ],
  },
  {
    path: "/ecommerce",
  },
]);

export default router;
