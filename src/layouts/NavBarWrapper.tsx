import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavDesktop from "../components/NavBar/NavDesktop/NavDesktop";
import NavMobile from "../components/NavBar/NavMobile/NavMobile";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BacktoTopButton/BacktoTopButton";

export default function NavBarWrapper() {
  const [isMobile, setMobile] = useState<boolean>(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1024);
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
