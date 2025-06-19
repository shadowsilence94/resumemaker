import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h1>About Our Resume Builder</h1>
                <p className="subtitle">
                    Empowering professionals to create stunning resumes with ease.
                </p>

                <section>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide an intuitive, powerful, and user-friendly platform that helps job seekers create professional, modern resumes in minutes. We believe that a great resume is the first step towards a dream career, and we are dedicated to making that step as simple as possible.
                    </p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Live Previews:</strong> See your changes in real-time as you switch between multiple professional templates.</li>
                        <li><strong>Dark Mode:</strong> Work comfortably at any time of day with our beautiful dark mode theme.</li>
                        <li><strong>Image Cropping:</strong> Upload and crop your profile picture for the perfect fit.</li>
                        <li><strong>PDF Download:</strong> Instantly download a high-quality, print-ready PDF of your final resume.</li>
                        <li><strong>Progressive Web App (PWA):</strong> Install the app on your device for a native-like experience.</li>
                    </ul>
                </section>

                <section>
                    <h2>Technology Stack</h2>
                    <p>
                        This application is built as a single-page application using modern web technologies, including:
                    </p>
                    <div className="tech-stack">
                        <span>Vite + React</span>
                        <span>React Router DOM</span>
                        <span>React Context API</span>
                        <span>Axios</span>
                        <span>jsPDF & html2canvas</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;