import React from "react";
import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";

import Tpl1 from "../features/resume/templates/Tpl1";
import Tpl2 from "../features/resume/templates/Tpl2";
import Tpl3 from "../features/resume/templates/Tpl3";
import Tpl4 from "../features/resume/templates/Tpl4";
import Tpl5 from "../features/resume/templates/Tpl5";

const sampleData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "123-456-7890",
    addressLine1: "123 Main Street",
    addressLine2: "Anytown, USA 12345",
    linkedIn: "linkedin.com/in/johndoe",
    portfolio: "github.com/johndoe",
    profileImage: "https://placehold.co/150x150/a3c5f9/121212?text=JD",
  },
  summary:
    "A highly motivated professional with a proven track record of success.",
  experience: [
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "2020-01",
      endDate: "Present",
      description: "Developed and maintained web applications using modern technologies.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science",
      school: "University of Technology",
      location: "San Francisco, CA",
      startDate: "2016-09",
      endDate: "2020-05",
      description: "Computer Science with focus on web development.",
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
};

const SampleDataProvider = ({ children }) => {
  return <div style={{ transform: "scale(1)", transformOrigin: "top left" }}>{children}</div>;
};

const templates = [
  { id: "tpl1", name: "Modern Professional", Component: Tpl1 },
  { id: "tpl2", name: "Minimalist Sidebar", Component: Tpl2 },
  { id: "tpl3", name: "Creative Design", Component: Tpl3 },
  { id: "tpl4", name: "Executive Classic", Component: Tpl4 },
  { id: "tpl5", name: "Traditional Format", Component: Tpl5 },
];

const TemplateSelection = () => {
  const navigate = useNavigate();
  const { resumeData, setSelectedTemplate, selectedTemplate } = useResumeContext();

  const hasUserData = resumeData?.personalInfo?.firstName || resumeData?.personalInfo?.lastName;

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Template
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {hasUserData
              ? "See how your information looks in a different layout."
              : "Select a layout you like. You can edit all the content in the next step."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {templates.map((template) => {
            const isSelected = selectedTemplate === template.id;
            return (
              <div
                key={template.id}
                className="cursor-pointer group w-full"
                onClick={() => handleTemplateSelect(template.id)}
              >
                <h3
                  className={`mb-4 font-semibold text-lg text-center transition-colors ${
                    isSelected
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400"
                  }`}
                >
                  {template.name}
                </h3>
                
                <div
                  className={`w-full aspect-[210/297] border-2 relative shadow-lg rounded-lg transition-all duration-300 ${
                    isSelected
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-xl ring-4 ring-primary-200 dark:ring-primary-800 transform scale-105"
                      : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 group-hover:shadow-xl group-hover:border-primary-400 dark:group-hover:border-primary-500 group-hover:transform group-hover:scale-102"
                  }`}
                  style={{ 
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <div 
                    className="template-preview-wrapper"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      className="template-preview-content"
                      style={{
                        width: '210mm',
                        height: '297mm',
                        transformOrigin: 'top left',
                        backgroundColor: '#ffffff',
                        margin: 0,
                        padding: 0
                      }}
                    >
                      {hasUserData ? (
                        <template.Component />
                      ) : (
                        <SampleDataProvider>
                          <template.Component />
                        </SampleDataProvider>
                      )}
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="absolute inset-0 bg-primary-500/10 flex items-center justify-center rounded-lg">
                      <div className="bg-primary-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                        Selected
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Click on any template above to start building your resume immediately.
          </p>
        </div>
      </div>
      
      <style>{`
        .template-preview-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .template-preview-content {
          position: absolute;
          top: 0;
          left: 0;
          transform-origin: top left;
          background-color: #ffffff;
          margin: 0;
          padding: 0;
          width: 210mm;
          height: 297mm;
        }
        
        /* Calculate scale to fit container perfectly */
        @media (max-width: 640px) {
          .template-preview-content {
            transform: scale(0.28);
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .template-preview-content {
            transform: scale(0.32);
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .template-preview-content {
            transform: scale(0.36);
          }
        }
        
        @media (min-width: 1025px) and (max-width: 1279px) {
          .template-preview-content {
            transform: scale(0.40);
          }
        }
        
        @media (min-width: 1280px) and (max-width: 1535px) {
          .template-preview-content {
            transform: scale(0.44);
          }
        }
        
        @media (min-width: 1536px) {
          .template-preview-content {
            transform: scale(0.48);
          }
        }
        
        /* Force templates to fill container */
        .template-preview-content > * {
          width: 210mm !important;
          height: 297mm !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        
        /* Specific fixes for template components */
        .template-preview-content .executive-resume,
        .template-preview-content .tpl5-resume,
        .template-preview-content [class*="resume"],
        .template-preview-content [class*="template"] {
          width: 210mm !important;
          height: 297mm !important;
          min-height: 297mm !important;
          max-width: 210mm !important;
          margin: 0 !important;
          padding: 15mm 20mm !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        
        /* Container responsive adjustments */
        @media (min-width: 640px) and (max-width: 768px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1179px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
            max-width: 1024px;
          }
        }
        
        @media (min-width: 1180px) {
          .container {
            max-width: 1280px;
          }
        }
      `}</style>
    </div>
  );
};

export default TemplateSelection;
