import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AppNavbar from "./components/AppNavbar";
import "./assets/styles/global.scss";
import Footer from "./components/Footer";
import MyProfilePage from "./pages/MyProfilePage";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
