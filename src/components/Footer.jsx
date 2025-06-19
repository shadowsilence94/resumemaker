import React from 'react';
import './Footer.css'; // Create this new CSS file

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <p>
                <strong>Resume Builder</strong> by Htut Ko Ko & Team
            </p>
            <p>
                &copy; {currentYear}. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;