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
    "A highly motivated professional with a proven track record of success in managing technical operations and driving business development.",
  experience: [
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "01/2020",
      endDate: "Present",
      responsibilities: [
        "Developed and maintained web applications.",
        "Collaborated with cross-functional teams.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.S. in Computer Science",
      school: "University of Technology",
      location: "San Francisco, CA",
      graduationDate: "05/2020",
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Tailwind CSS"],
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
  const { resumeData, setSelectedTemplate, selectedTemplate, clearResumeData } =
    useResumeContext();

  const hasUserData =
    resumeData?.personalInfo?.firstName || resumeData?.personalInfo?.lastName;

  const handleTemplateSelect = (templateId) => {
    if (!hasUserData) {
      clearResumeData();
    }
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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
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
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                >
                  {template.name}
                </h3>

                <div
                  className={`w-full aspect-[210/297] border-2 relative shadow-lg rounded-lg transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-xl ring-4 ring-blue-200 dark:ring-blue-800 transform scale-105"
                      : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:transform group-hover:scale-102"
                  }`}
                >
                  <div className="template-preview-scaler">
                    <template.Component
                      resumeData={hasUserData ? resumeData : sampleData}
                    />
                  </div>

                  {isSelected && (
                    <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center rounded-lg">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                        Selected
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .template-preview-scaler {
          position: absolute;
          top: 0;
          left: 0;
          width: 210mm;
          height: 297mm;
          transform-origin: top left;
          background-color: #ffffff;
        }
        .template-preview-scaler > div {
          box-shadow: none !important;
          margin: 0 !important;
        }

        /* Rule for extra small screens (phones) */
        @media (max-width: 639px) {
          .template-preview-scaler { transform: scale(0.24); }
        }

        /* Rule for small screens (tablets) */
        @media (min-width: 640px) and (max-width: 1023px) {
          .template-preview-scaler { transform: scale(0.44); }
        }

        /* Rule for medium screens */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .template-preview-scaler { transform: scale(0.42); }
        }
        
        /* Rule for large screens */
        @media (min-width: 1280px) {
          .template-preview-scaler { transform: scale(0.32); }
        }
      `}</style>
    </div>
  );
};

export default TemplateSelection;
