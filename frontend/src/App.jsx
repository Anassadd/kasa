import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer"; // 👈 importe Footer
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
//import Logement from "./pages/Logement.jsx"; // 👈 importe la page Logement
import Dropdown from "./components/Dropdown.jsx";
import ErrorPage from "./pages/Error.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/logement/:id" 
          element={<div style={{padding: '20px', color: 'green'}}>Test réussi ! La route fonctionne.</div>} 
        />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer /> {/* 👈 Footer après toutes les routes */}
    </>
  );
}

export default App;