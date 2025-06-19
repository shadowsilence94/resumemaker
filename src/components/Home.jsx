import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResumeContext } from '../useContext/UseContext';

const Home = () => {
    const navigate = useNavigate();
    const { clearResumeData } = useResumeContext();
    const handleGetStarted = () => {
        clearResumeData();
        navigate('/templates');
    };

    return (
        <div className="flex flex-col justify-center items-center text-center h-[70vh]">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                Easy Resume
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
                Craft a professional, modern resume in minutes. Stand out and get the job you deserve.
            </p>
            <button onClick={handleGetStarted} className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition-transform transform hover:scale-105 shadow-lg">
                Get Started For Free
            </button>
        </div>
    );
};
export default Home;