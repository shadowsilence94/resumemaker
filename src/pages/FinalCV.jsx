import React, { useRef, useState, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FileDown,
  Layers,
  Home,
  Edit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { generateOptimizedPDF } from "../utils/pdfUtils";
import { useResumeContext } from "../context/ResumeContext";

import Tpl1 from "../features/resume/templates/Tpl1";
import Tpl2 from "../features/resume/templates/Tpl2";
import Tpl3 from "../features/resume/templates/Tpl3";
import Tpl4 from "../features/resume/templates/Tpl4";
import Tpl5 from "../features/resume/templates/Tpl5";
import FloatingButton from "../components/ui/FloatingButton";

const templateMap = {
  tpl1: Tpl1,
  tpl2: Tpl2,
  tpl3: Tpl3,
  tpl4: Tpl4,
  tpl5: Tpl5,
};

const templateNames = {
  tpl1: "Modern Professional",
  tpl2: "Minimalist Sidebar",
  tpl3: "Creative Design",
  tpl4: "Executive Classic",
  tpl5: "Traditional Format",
};

const FinalCV = () => {
  const { templateId } = useParams();
  const { resumeData } = useResumeContext();
  const resumeContentRef = useRef(null);
  const TemplateToRender = templateMap[templateId];

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const A4_HEIGHT_IN_PX = 1123;

  // This hook now has a stable dependency array, which fixes the console warning.
  useLayoutEffect(() => {
    const calculatePages = () => {
      if (resumeContentRef.current) {
        const contentHeight = resumeContentRef.current.scrollHeight;
        setTotalPages(Math.max(1, Math.ceil(contentHeight / A4_HEIGHT_IN_PX)));
      }
    };

    const timer = setTimeout(calculatePages, 200); // Small delay for content to render
    window.addEventListener("resize", calculatePages);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePages);
    };
  }, [resumeData, TemplateToRender]); // Dependencies are now stable

  const handleDownloadPdf = () => {
    generateOptimizedPDF(resumeContentRef.current, templateId, "my-resume.pdf");
  };

  const goToNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-20">
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link
              to="/"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Home size={20} />
            </Link>
            <div className="text-center">
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                {templateNames[templateId] || "Resume Preview"}
              </h1>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handleDownloadPdf}
                className="flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                <FileDown size={16} className="mr-2" />
                Download
              </button>
              <Link
                to="/templates"
                className="flex items-center bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                <Layers size={16} className="mr-2" />
                Change Template
              </Link>
            </div>
            <div className="sm:hidden w-8"></div>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center gap-4 my-6">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-medium text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex justify-center px-4">
        <div className="resume-page-container">
          <div
            className="resume-content-wrapper"
            style={{
              transform: `translateY(-${
                (currentPage - 1) * A4_HEIGHT_IN_PX
              }px)`,
            }}
          >
            <div ref={resumeContentRef}>
              {TemplateToRender && <TemplateToRender />}
            </div>
          </div>
        </div>
      </div>

      <FloatingButton
        to={`/editor/${templateId}`}
        icon={<Edit size={22} />}
        text="Edit"
      />

      <div className="sm:hidden fixed bottom-4 left-4 z-50 flex flex-col gap-3">
        <button
          onClick={handleDownloadPdf}
          className="flex items-center justify-center bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg"
        >
          <FileDown size={22} />
        </button>
        <Link
          to="/templates"
          className="flex items-center justify-center bg-gray-600 text-white w-14 h-14 rounded-full shadow-lg"
        >
          <Layers size={22} />
        </Link>
      </div>

      <style>{`
  .resume-page-container {
    width: 210mm;
    height: 297mm;
    background: white;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
                0 8px 10px -6px rgb(0 0 0 / 0.1);
    transform-origin: top center;
    transition: transform 0.2s ease-out;
  }

  .resume-content-wrapper {
    transition: transform 0.5s ease-in-out;
  }

  /* Prevent extra spacing from box shadows */
  .resume-page-container > div > div {
    box-shadow: none !important;
    margin: 0 !important;
  }

  /* Default scale */
  :root {
    --resume-scale: 1;
  }

  /* Scale for tablets */
  @media (max-width: 1024px) {
    :root {
      --resume-scale: 0.8;
    }
  }

  /* Scale for large phones */
  @media (max-width: 768px) {
    :root {
      --resume-scale: 0.6;
    }
  }

  /* Scale for small phones */
  @media (max-width: 480px) {
    :root {
      --resume-scale: 0.45;
    }
  }

  /* Apply scaling */
  .resume-page-container {
    transform: scale(var(--resume-scale));
  }

  /* Let parent container scroll if content is wider than screen */
  .flex.justify-center.px-4 {
    overflow-x: auto;
  }

  /* Prevent horizontal scroll clipping */
  .resume-page-container {
    min-width: 210mm;
  }
`}</style>
    </div>
  );
};

export default FinalCV;
