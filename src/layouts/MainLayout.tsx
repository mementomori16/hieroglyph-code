// src/layouts/MainLayout.tsx

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavDesktop from "../components/NavBar/NavDesktop/NavDesktop";
import NavMobile from "../components/NavBar/NavMobile/NavMobile";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BacktoTopButton/BacktoTopButton";
import PreloaderWrapper from "../components/ImagePreloader/PreloaderWrapper";
import { extractAllImageUrls, preloadImages } from "../utils/ImagePreloader/imagePreloader";
import "./MainLayout.scss";

// Import your logo directly (if used in preloader)
import logo from "../assets/images/icons/Group.svg";

export default function MainLayout() {
  const [isMobile, setMobile] = useState<boolean>(window.innerWidth < 992);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();

  // useEffect to handle window resize for mobile/desktop view
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect to handle the preloader logic
  useEffect(() => {
    const imageUrls = extractAllImageUrls();
    const logoPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject();
      img.src = logo;
    });

    Promise.all([...imageUrls.map((url) => preloadImages([url])), logoPromise])
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once

  // useEffect to scroll to the top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Conditional rendering based on the loading state
  if (isLoading) {
    return <PreloaderWrapper />;
  }

  // Render the full layout after preloading is complete
  return (
    <div className="app-container">
      {isMobile ? <NavMobile /> : <NavDesktop />}
      <main className="main-content">
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}