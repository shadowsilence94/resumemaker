import React, { useState, useEffect } from 'react';
import { ResumeContext } from './ResumeContext';
import { initialData, initialSections } from '../constants/initialData';

export const ResumeProvider = ({ children }) => {
    
    const [resumeData, setResumeData] = useState(() => {
        try {
            const savedData = localStorage.getItem('resumeData');
            return savedData ? JSON.parse(savedData) : initialData;
        } catch { return initialData; }
    });

    const [sections, setSections] = useState(() => {
        try {
            const savedSections = localStorage.getItem('resumeSections');
            return savedSections ? JSON.parse(savedSections) : initialSections;
        } catch { return initialSections; }
    });

    const [selectedTemplate, setSelectedTemplate] = useState(() => {
        try {
            const savedTemplate = localStorage.getItem('selectedTemplate');
            return savedTemplate ? JSON.parse(savedTemplate) : 'minimalist';
        } catch { return 'minimalist'; }
    });

    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme || 'light';
        } catch { return 'light'; }
    });

    useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }, [resumeData]);

    useEffect(() => {
        localStorage.setItem('resumeSections', JSON.stringify(sections));
    }, [sections]);

    useEffect(() => {
        localStorage.setItem('selectedTemplate', JSON.stringify(selectedTemplate));
    }, [selectedTemplate]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        // Apply theme to document root
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const updateResumeData = (newData) => {
        setResumeData(prev => ({ ...prev, ...newData }));
    };

    const updateSections = (newSections) => {
        setSections(prev => ({ ...prev, ...newSections }));
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const clearResumeData = () => {
        setResumeData(initialData);
        setSections(initialSections);
        setSelectedTemplate('minimalist');
        localStorage.removeItem('resumeData');
        localStorage.removeItem('resumeSections');
        localStorage.removeItem('selectedTemplate');
    };

    const value = {
        resumeData,
        setResumeData,
        updateResumeData,
        sections,
        setSections,
        updateSections,
        selectedTemplate,
        setSelectedTemplate,
        theme,
        setTheme,
        toggleTheme,
        clearResumeData,
    };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    );
};
