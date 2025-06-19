import React from 'react';
import { useResumeContext } from '../useContext/UseContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useResumeContext();

    const btnStyle = {
      backgroundColor: 'transparent',
      border: '1px solid #888',
      color: theme === 'light' ? '#333' : '#eee',
      padding: '8px 12px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '14px',
    };

    return (
        <button onClick={toggleTheme} style={btnStyle}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;