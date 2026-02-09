import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import StudioPage from './pages/StudioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-black selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/estudio" element={<StudioPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
