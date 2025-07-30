import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Navigation
import Home from './pages/Home';         // Page d'accueil
import About from './pages/About';       // Page "À propos" 
import Error from './pages/Error';       // Page d'erreur 404

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <BrowserRouter>                     {/* Conteneur de navigation */}
        <Routes>                          {/* Gestion des routes */}
          <Route path="/" element={<Home />} />      {/* Route accueil */}
          <Route path="/about" element={<About />} /> {/* Route "À propos" */}
          <Route path="*" element={<Error />} />     {/* Route 404 */}
        </Routes>
      </BrowserRouter>

      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
