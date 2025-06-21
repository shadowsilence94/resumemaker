import React from 'react';
import { useResumeContext } from '../useContext/UseContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useResumeContext();

    const btnClass = `
        px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${theme === 'light' 
            ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
            : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
        }
    `;

    return (
        <button onClick={toggleTheme} className={btnClass}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;