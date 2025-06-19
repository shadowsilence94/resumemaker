import React from 'react';
import { Link } from 'react-router-dom';

const FloatingButton = ({ to, icon, text }) => {
    return (
        <Link 
            to={to} 
            className="fixed bottom-6 right-6 z-50 flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
            {icon}
            <span className="ml-2">{text}</span>
        </Link>
    );
};
export default FloatingButton;