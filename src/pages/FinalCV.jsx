import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FileDown, Layers, Home, Edit } from "lucide-react";
import { generateOptimizedPDF } from "../utils/pdfUtils";

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
  const resumeRef = useRef();
  const TemplateToRender = templateMap[templateId];

  const handleDownloadPdf = async () => {
    const input = resumeRef.current;
    if (!input) return;

    try {
      await generateOptimizedPDF(input, templateId, "my-resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    // Add padding-bottom to the main container to make space for the footer
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-24 sm:pb-0">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Home size={20} className="mr-2" />
                <span className="font-medium hidden sm:inline">
                  Easy Resume
                </span>
              </Link>
            </div>

            <div className="text-center">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Resume Preview
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {templateNames[templateId] || templateId?.toUpperCase()}
              </p>
            </div>

            {/* Buttons for Desktop View */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handleDownloadPdf}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                <FileDown size={16} className="mr-2" />
                Download
              </button>
              <Link
                to="/templates"
                className="flex items-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                <Layers size={16} className="mr-2" />
                Change Template
              </Link>
            </div>
            <div className="sm:hidden w-12"></div>
          </div>
        </div>
      </div>

      {/* Resume Preview Content Wrapper */}
      <div className="preview-wrapper">
        <div ref={resumeRef} className="resume-preview-container">
          {TemplateToRender && <TemplateToRender />}
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
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Download PDF"
        >
          <FileDown size={22} />
        </button>
        <Link
          to="/templates"
          className="flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white font-bold w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Change Template"
        >
          <Layers size={22} />
        </Link>
      </div>

      <style>{`
                .preview-wrapper {
                    padding: 2rem 0;
                    display: flex;
                    justify-content: center;
                }
                .resume-preview-container {
                    width: 210mm;
                    height: 297mm;
                    transform-origin: top center;
                    background: white;
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                    transition: transform 0.2s ease-out;
                }

                @media (min-width: 821px) {
                    .resume-preview-container {
                        transform: scale(1);
                    }
                }
                
                @media (max-width: 820px) {
                    .resume-preview-container {
                        transform: scale(calc(95vw / 210mm));
                    }
                }
                
                .resume-preview-container > div {
                    box-shadow: none !important;
                    overflow: hidden !important;
                }
            `}</style>
    </div>
  );
};

export default FinalCV;
