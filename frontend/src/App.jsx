import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Logement from "./pages/logement.jsx";
import Dropdown from "./components/dropdown.jsx";
import ErrorPage from "./pages/error.jsx";


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