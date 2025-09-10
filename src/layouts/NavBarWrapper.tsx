// src/components/NavBarWrapper.tsx

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavDesktop from "../components/NavBar/NavDesktop/NavDesktop";
import NavMobile from "../components/NavBar/NavMobile/NavMobile";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BacktoTopButton/BacktoTopButton";

export default function NavBarWrapper() {
  // Change the breakpoint to a smaller value, for example, 992px
  // This will render the desktop nav for screens larger than 991px
  const [isMobile, setMobile] = useState<boolean>(window.innerWidth < 992);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      // Use the same breakpoint here
      setMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <NavMobile /> : <NavDesktop />}
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  );
}
