import React, { createContext, useState, useContext, useEffect } from 'react';

const ResumeContext = createContext();

export const useResumeContext = () => {
    return useContext(ResumeContext);
};

// This is the default blank state for a new user
const initialData = {
    personalInfo: {
        firstName: '', lastName: '', email: '', phone: '',
        addressLine1: '', addressLine2: '', linkedIn: '',
        portfolio: '', profileImage: null,
    },
    summary: '',
    experience: [{ id: 1, jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: [''] }],
    education: [{ id: 1, degree: '', school: '', location: '', graduationDate: '' }],
    skills: ['']
};


export const ResumeProvider = ({ children }) => {
    
    // 1. Initialize state from localStorage or use the blank initialData
    const [resumeData, setResumeData] = useState(() => {
        try {
            const savedData = localStorage.getItem('resumeData');
            return savedData ? JSON.parse(savedData) : initialData;
        } catch (error) {
            console.error("Could not parse resume data from localStorage", error);
            return initialData;
        }
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    // 2. Use useEffect to save data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }, [resumeData]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        resumeData,
        setResumeData,
        theme,
        toggleTheme,
    };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    );
};