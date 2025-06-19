import React, { createContext, useState, useContext, useEffect } from 'react';

export const ResumeContext = createContext();

export const useResumeContext = () => {
    return useContext(ResumeContext);
};

export const initialData = {
    personalInfo: {
        firstName: '', lastName: '', email: '', phone: '',
        addressLine1: '', addressLine2: '', linkedIn: '',
        portfolio: '', profileImage: null,
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    customSections: [],
};

const initialSections = {
    summary: true,
    experience: true,
    education: true,
    skills: true,
};

export const ResumeProvider = ({ children }) => {
    
    const [resumeData, setResumeData] = useState(() => {
        try {
            const savedData = localStorage.getItem('resumeData');
            return savedData ? JSON.parse(savedData) : initialData;
        } catch (error) { return initialData; }
    });

    const [sections, setSections] = useState(() => {
        try {
            const savedSections = localStorage.getItem('resumeSections');
            return savedSections ? JSON.parse(savedSections) : initialSections;
        } catch (error) { return initialSections; }
    });

    const [selectedTemplate, setSelectedTemplate] = useState(() => {
        return localStorage.getItem('selectedTemplate') || null;
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }, [resumeData]);
    
    useEffect(() => {
        localStorage.setItem('resumeSections', JSON.stringify(sections));
    }, [sections]);

    useEffect(() => {
        if (selectedTemplate) {
            localStorage.setItem('selectedTemplate', selectedTemplate);
        } else {
            localStorage.removeItem('selectedTemplate');
        }
    }, [selectedTemplate]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const clearResumeData = () => {
        setResumeData(initialData);
        setSections(initialSections);
        setSelectedTemplate(null);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        resumeData,
        setResumeData,
        theme,
        toggleTheme,
        selectedTemplate,
        setSelectedTemplate,
        sections,
        setSections,
        clearResumeData,
    };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    );
};
