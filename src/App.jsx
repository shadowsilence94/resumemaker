import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useResumeContext } from './useContext/UseContext';
import ThemeToggle from './components/ThemeToggle';
import FloatingButton from './components/FloatingButton';
import { FileText, Edit, Eye } from 'lucide-react';

import Home from './components/Home.jsx';
import Editor from './pages/Editor.jsx';
import TemplateSelection from './pages/TemplateSelection.jsx';
import FinalCV from './pages/FinalCV.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Review from './components/Review.jsx';
import Footer from './components/Footer.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import Cookies from './components/Cookies.jsx';

const AppWithFloatingButton = () => {
    const location = useLocation();
    const { resumeData, selectedTemplate } = useResumeContext();
    const hasUserData = resumeData.personalInfo.firstName !== '';
    const pathParts = location.pathname.split('/');
    const templateId = pathParts[pathParts.length - 1];

    const showFab = () => {
        if (location.pathname.startsWith('/editor/')) {
            return <FloatingButton to={`/final-cv/${templateId}`} icon={<Eye size={18}/>} text="Preview" />;
        }
        if (location.pathname.startsWith('/final-cv/')) {
            return <FloatingButton to={`/editor/${templateId}`} icon={<Edit size={18}/>} text="Edit" />;
        }
        if (['/about', '/contact', '/reviews', '/'].includes(location.pathname) && hasUserData && selectedTemplate) {
            return <FloatingButton to={`/final-cv/${selectedTemplate}`} icon={<FileText size={18}/>} text="Your Resume" />;
        }
        return null;
    };
    
    return showFab();
};

const App = () => {
  const { theme } = useResumeContext();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.fontFamily = "'Inter', sans-serif";
  }, [theme]);

  const navLinkClasses = ({ isActive }) =>
    `py-2 px-3 font-medium rounded-md transition-colors text-sm ${
      isActive
        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#111827] dark:bg-[#111827] text-gray-900 dark:text-gray-200">
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-4 md:px-10 h-16 shadow-sm sticky top-0 z-50 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
          <div className="flex gap-2 md:gap-4 items-center">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/reviews" className={navLinkClasses}>Reviews</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          </div>
          <ThemeToggle />
        </nav>
        <main className="p-4 md:p-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<TemplateSelection />} />
            <Route path="/editor/:templateId" element={<Editor />} />
            <Route path="/final-cv/:templateId" element={<FinalCV />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <AppWithFloatingButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;