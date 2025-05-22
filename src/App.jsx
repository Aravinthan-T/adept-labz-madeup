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
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/myprofile" element={<MyProfilePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
