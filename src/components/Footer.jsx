import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center p-6 bg-gray-100 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 mt-auto">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Easy Resume</strong> by Htut Ko Ko & Team
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {currentYear}. All Rights Reserved.
            </p>
        </footer>
    );
};
export default Footer;