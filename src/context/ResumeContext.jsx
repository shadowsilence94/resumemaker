import React, { createContext, useContext } from 'react';

export const ResumeContext = createContext();

export const useResumeContext = () => {
    return useContext(ResumeContext);
};
