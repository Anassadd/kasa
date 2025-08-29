import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Logement from "./pages/Logement.jsx";
import Dropdown from "./components/Dropdown.jsx";
import ErrorPage from "./pages/Error.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} /> 
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer /> 
    </>
  );
}

export default App;