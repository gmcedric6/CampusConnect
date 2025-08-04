
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  const location = useLocation();
  // Génère une clé unique à chaque navigation vers la racine
  const homeKey = location.pathname === "/" ? Date.now() : undefined;
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage key={homeKey} />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
