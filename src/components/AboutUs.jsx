import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto my-8 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <div>
                <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">About Our Resume Builder</h1>
                <p className="text-center text-lg text-gray-600 dark:text-gray-400 my-4 mb-12">
                    A powerful, open-source tool for creating beautiful, professional resumes with ease.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-4">Our Mission</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Our mission is to provide an intuitive and flexible platform that empowers job seekers to build standout resumes in minutes. We believe that a great resume is a key step towards a dream career, and we are dedicated to making that process as simple and effective as possible.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-4">Current Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li><strong>Professional Templates:</strong> Choose from multiple designs, including minimalist, sidebar, and classic layouts.</li>
                        <li><strong>Live Previews:</strong> See how your data looks in every template before you start editing.</li>
                        <li><strong>Intuitive Editor:</strong> Easily add, edit, and remove sections, including custom user-defined sections.</li>
                        <li><strong>Section Visibility:</strong> Hide sections like "Summary" or "Skills" that you don't need for a specific application.</li>
                        <li><strong>Image Cropping:</strong> Upload and crop your profile picture for the perfect professional look.</li>
                        <li><strong>Data Persistence:</strong> Your data is saved in your browser, so you can pick up where you left off.</li>
                        <li><strong>Dark Mode:</strong> Work comfortably at any time of day with a sleek dark theme.</li>
                        <li><strong>PDF Download:</strong> Instantly download a high-quality, print-ready PDF of your final resume.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-4">Technology Stack</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        This application is built as a single-page application using modern web technologies:
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">Vite + React</span>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">React Router</span>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">Tailwind CSS</span>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">Lucide React (Icons)</span>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">React Easy Crop</span>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">jsPDF & html2canvas</span>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default AboutUs;