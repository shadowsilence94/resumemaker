import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { useResumeContext } from "./context/ResumeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import FloatingButton from "./components/ui/FloatingButton";
import { FileText, Edit, Eye, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./components/common/Home.jsx";
import Editor from "./pages/Editor.jsx";
import TemplateSelection from "./pages/TemplateSelection.jsx";
import FinalCV from "./pages/FinalCV.jsx";
import AboutUs from "./components/common/AboutUs.jsx";
import Contact from "./components/common/Contact.jsx";
import Review from "./components/common/Review.jsx";
import Footer from "./components/layout/Footer.jsx";
import PrivacyPolicy from "./components/common/PrivacyPolicy.jsx";
import TermsOfService from "./components/common/TermsOfService.jsx";
import Cookies from "./components/common/Cookies.jsx";

const AppContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const context = useResumeContext();

  if (!context) return null;

  const { resumeData, selectedTemplate } = context;
  const hasUserData = resumeData?.personalInfo?.firstName !== "";
  const pathParts = location.pathname.split("/");
  const templateId = pathParts[pathParts.length - 1];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const showFab = () => {
    if (location.pathname.startsWith("/editor/")) {
      return (
        <FloatingButton
          to={`/final-cv/${templateId}`}
          icon={<Eye size={18} />}
          text="Preview"
        />
      );
    }
    if (location.pathname.startsWith("/final-cv/")) {
      return (
        <FloatingButton
          to={`/editor/${templateId}`}
          icon={<Edit size={18} />}
          text="Edit"
        />
      );
    }
    if (
      ["/about", "/contact", "/reviews", "/"].includes(location.pathname) &&
      hasUserData &&
      selectedTemplate
    ) {
      return (
        <FloatingButton
          to={`/final-cv/${selectedTemplate}`}
          icon={<FileText size={18} />}
          text="Your Resume"
        />
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl h-20 shadow-lg sticky top-0 z-50 border-b border-gray-200/30 dark:border-gray-700/30">
        <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/favicon.svg" alt="Easy Resume" className="w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Easy Resume
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                Professional Builder
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-modern ${isActive ? "nav-active" : ""}`
              }
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `nav-link-modern ${isActive ? "nav-active" : ""}`
              }
            >
              <span>Reviews</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link-modern ${isActive ? "nav-active" : ""}`
              }
            >
              <span>About</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link-modern ${isActive ? "nav-active" : ""}`
              }
            >
              <span>Contact</span>
            </NavLink>
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2.5 rounded-xl"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* The 'sticky top-20' class makes the menu stay fixed below the main navbar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-2xl sticky top-20 z-40"
          >
            <div className="px-6 py-4 space-y-2">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/reviews"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
              >
                Reviews
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<TemplateSelection />} />
          <Route path="/editor" element={<TemplateSelection />} />
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

      {showFab()}
      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
