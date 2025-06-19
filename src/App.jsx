import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useResumeContext } from './useContext/UseContext';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home.jsx';
import Editor from './pages/Editor.jsx';
import TemplateSelection from './pages/TemplateSelection.jsx';
import FinalCV from './pages/FinalCV.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Review from './components/Review.jsx';
import Footer from './components/Footer.jsx'; // Import the new Footer
import './App.css';

const App = () => {
  const { theme } = useResumeContext();

  useEffect(() => {
    document.body.className = theme;
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, [theme]);

  return (
    <BrowserRouter>
      {/* The main container is now a flex column to push footer down */}
      <div className="app-layout">
        <nav className="navbar">
          <div className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/editor" className="nav-link">Editor</NavLink>
            <NavLink to="/templates" className="nav-link">Templates</NavLink>
            <NavLink to="/reviews" className="nav-link">Reviews</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>
          <ThemeToggle />
        </nav>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/templates" element={<TemplateSelection />} />
            <Route path="/final-cv/:templateName" element={<FinalCV />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Add the Footer here */}
      </div>
    </BrowserRouter>
  );
};

export default App;