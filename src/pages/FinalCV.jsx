import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileDown, Layers, Home } from 'lucide-react';
import { generateOptimizedPDF } from '../utils/pdfUtils';

import Tpl1 from '../features/resume/templates/Tpl1';
import Tpl2 from '../features/resume/templates/Tpl2';
import Tpl3 from '../features/resume/templates/Tpl3';
import Tpl4 from '../features/resume/templates/Tpl4';
import Tpl5 from '../features/resume/templates/Tpl5';

const templateMap = { 
    tpl1: Tpl1, 
    tpl2: Tpl2, 
    tpl3: Tpl3, 
    tpl4: Tpl4, 
    tpl5: Tpl5 
};

const templateNames = {
    tpl1: 'Modern Professional',
    tpl2: 'Minimalist Sidebar', 
    tpl3: 'Creative Design',
    tpl4: 'Executive Classic',
    tpl5: 'Traditional Format'
};

const FinalCV = () => {
    const { templateId } = useParams();
    const resumeRef = useRef();
    const TemplateToRender = templateMap[templateId];

    const handleDownloadPdf = async () => {
        const input = resumeRef.current;
        if (!input) return;
        
        try {
            await generateOptimizedPDF(input, templateId, 'my-resume.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="sticky top-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
                        <div className="flex items-center">
                            <Link 
                                to="/" 
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Home size={20} className="mr-2"/>
                                <span className="font-medium">Easy Resume</span>
                            </Link>
                        </div>

                        <div className="text-center">
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                Resume Preview
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Template: {templateNames[templateId] || templateId?.toUpperCase()}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <button 
                                onClick={handleDownloadPdf} 
                                className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto"
                            >
                                <FileDown size={18} className="mr-2"/> 
                                <span>Download PDF</span>
                            </button>
                            <Link 
                                to="/templates" 
                                className="flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto"
                            >
                                <Layers size={18} className="mr-2"/> 
                                <span>Change Template</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4 sm:py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                        <div className="flex justify-center">
                            <div 
                                ref={resumeRef}
                                className="resume-preview-container"
                                style={{
                                    width: '210mm',
                                    minHeight: '297mm',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    borderRadius: '4px',
                                    transformOrigin: 'top center'
                                }}
                            >
                                {TemplateToRender && <TemplateToRender />}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            💡 Tips for Best Results
                        </h3>
                        <ul className="text-blue-800 dark:text-blue-200 space-y-2 text-sm">
                            <li>• Download your resume as PDF for the best print quality</li>
                            <li>• The PDF will be optimized for A4 paper size (210mm × 297mm)</li>
                            <li>• Try different templates to find the one that best suits your industry</li>
                            <li>• Make sure all your information is complete before downloading</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
                .resume-preview-container {
                    transform-origin: top center;
                    overflow: visible;
                }
                
                @media (max-width: 640px) {
                    .resume-preview-container {
                        transform: scale(0.6);
                        margin-bottom: -40%;
                    }
                }
                
                @media (min-width: 641px) and (max-width: 768px) {
                    .resume-preview-container {
                        transform: scale(0.75);
                        margin-bottom: -25%;
                    }
                }
                
                @media (min-width: 769px) and (max-width: 1024px) {
                    .resume-preview-container {
                        transform: scale(0.85);
                        margin-bottom: -15%;
                    }
                }
                
                @media (min-width: 1025px) and (max-width: 1400px) {
                    .resume-preview-container {
                        transform: scale(0.95);
                        margin-bottom: -5%;
                    }
                }
                
                @media (min-width: 1401px) {
                    .resume-preview-container {
                        transform: scale(1);
                        margin-bottom: 0;
                    }
                }
                
                .resume-preview-container * {
                    word-wrap: normal !important;
                    overflow-wrap: normal !important;
                    hyphens: none !important;
                    white-space: normal !important;
                }
            `}</style>
        </div>
    );
};

export default FinalCV;
