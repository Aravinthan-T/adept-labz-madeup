// src/pages/MyProfilePage.jsx
import { useEffect, useState } from "react";
import MyProfileMobile from "../components/MyProfileMobile.jsx";
import MyProfileLarger from "../components/MyProfileLarger.jsx";

const MyProfilePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MyProfileMobile /> : <MyProfileLarger />}</>;
};

export default MyProfilePage;
