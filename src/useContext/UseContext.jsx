import React, { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

export const useResumeContext = () => {
    return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState({
        personalInfo: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            addressLine1: '', // Updated
            addressLine2: '', // Updated
            linkedIn: '',
            portfolio: '',
            profileImage: null,
        },
        summary: '',
        experience: [
            { id: 1, jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: [''] }
        ],
        education: [
            { id: 1, degree: '', school: '', location: '', graduationDate: '' }
        ],
        skills: ['']
    });

    const [theme, setTheme] = useState('light');

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