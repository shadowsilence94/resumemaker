import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResumeContext, ResumeContext } from '../useContext/UseContext';

import Tpl1 from '../templates/Tpl1';
import Tpl2 from '../templates/Tpl2';
import Tpl3 from '../templates/Tpl3';
import Tpl4 from '../templates/Tpl4';
import Tpl5 from '../templates/Tpl5';

const sampleData = {
    personalInfo: { firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com', phone: '123-456-7890', addressLine1: '123 Main Street', addressLine2: 'Anytown, USA 12345', linkedIn: 'linkedin.com/in/johndoe', portfolio: 'github.com/johndoe', profileImage: 'https://placehold.co/150x150/a3c5f9/121212?text=JD' },
    summary: 'A highly motivated professional with a proven track record of success.',
    experience: [{ id: 1, jobTitle: 'Software Engineer', company: 'Tech Solutions Inc.', location: 'San Francisco, CA', startDate: 'Jan 2022', endDate: 'Present', responsibilities: ['Developed and maintained web applications.'] }],
    education: [{ id: 1, degree: 'B.S. in Computer Science', school: 'State University', graduationDate: 'May 2021' }],
    skills: ['React', 'Node.js', 'JavaScript'],
    customSections: [],
};

const templates = [
    { id: 'tpl1', name: 'Minimalist', Component: Tpl1 },
    { id: 'tpl2', name: 'Sidebar Professional', Component: Tpl2 },
    { id: 'tpl3', name: 'Creative Header', Component: Tpl3 },
    { id: 'tpl4', name: 'Formal Executive', Component: Tpl4 },
    { id: 'tpl5', name: 'Classic Professional', Component: Tpl5 },
];

const SampleDataProvider = ({ children }) => (
    <ResumeContext.Provider value={{ resumeData: sampleData, sections: { summary: true, experience: true, education: true, skills: true } }}>
        {children}
    </ResumeContext.Provider>
);

const TemplateSelection = () => {
    const { resumeData, setSelectedTemplate } = useResumeContext();
    const navigate = useNavigate();
    const hasUserData = resumeData.personalInfo.firstName !== '';

    const handleTemplateSelect = (templateId) => {
        setSelectedTemplate(templateId);
        if (hasUserData) {
            navigate(`/final-cv/${templateId}`);
        } else {
            navigate(`/editor/${templateId}`);
        }
    };

    return (
        <div className="text-center p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">{hasUserData ? 'Choose a New Style' : 'Start by Choosing a Template'}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">{hasUserData ? 'See how your information looks in a different layout.' : 'Select a layout you like. You can edit all the content in the next step.'}</p>
            <div className="flex justify-center flex-wrap gap-10 mt-8">
                {templates.map(template => (
                    <div key={template.id} className="cursor-pointer group" onClick={() => handleTemplateSelect(template.id)}>
                        <h3 className="mb-4 font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{template.name}</h3>
                        <div className="w-[300px] h-[424px] border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 overflow-hidden relative shadow-lg rounded-md transition-shadow group-hover:shadow-2xl">
                            <div className="w-[8.5in] origin-top-left transform scale-[0.35]">
                                {hasUserData ? <template.Component /> : <SampleDataProvider><template.Component /></SampleDataProvider>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TemplateSelection;