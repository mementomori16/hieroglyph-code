// src/layouts/MainLayout.tsx

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavDesktop from "../components/NavBar/NavDesktop/NavDesktop";
import NavMobile from "../components/NavBar/NavMobile/NavMobile";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BacktoTopButton/BacktoTopButton";
// REMOVED: import PreloaderWrapper from "../components/ImagePreloader/PreloaderWrapper";
// REMOVED: import { extractAllImageUrls, preloadImages } from "../utils/ImagePreloader/imagePreloader";
import "./MainLayout.scss";

// REMOVED: import logo from "../assets/images/icons/Group.svg";

export default function MainLayout() {
  const [isMobile, setMobile] = useState<boolean>(window.innerWidth < 992);
  // REMOVED: const [isLoading, setIsLoading] = useState<boolean>(true);
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

  // REMOVED: useEffect to handle the preloader logic
  /*
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
  }, []); 
  */

  // useEffect to scroll to the top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // REMOVED: Conditional rendering based on the loading state
  /*
  if (isLoading) {
    return <PreloaderWrapper />;
  }
  */

  // Render the full layout (always renders now that preloader is removed)
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