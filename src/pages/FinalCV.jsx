import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Import all templates with their correct names
import Tpl1 from '../templates/Tpl1';
import Tpl2 from '../templates/Tpl2';
import Tpl3 from '../templates/Tpl3';
import Tpl4 from '../templates/Tpl4';
import Tpl5 from '../templates/Tpl5'; // Changed from ClassicTemplate

// Update the template map
const templateMap = {
    tpl1: Tpl1,
    tpl2: Tpl2,
    tpl3: Tpl3,
    tpl4: Tpl4,
    tpl5: Tpl5, // Changed from 'classic'
};

const FinalCV = () => {
    const { templateName } = useParams();
    const resumeRef = useRef();
    const TemplateToRender = templateMap[templateName];

    const handleDownloadPdf = () => {
        const input = resumeRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const canvasWidth = canvas.width;
            const ratio = canvasWidth / pdfWidth;
            const pdfHeight = canvas.height / ratio;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${templateName}-resume.pdf`);
        });
    };

    return (
        <div>
            <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'sans-serif' }}>
                <button onClick={handleDownloadPdf} className="download-btn-main">
                    Download as PDF
                </button>
            </div>
            <div ref={resumeRef}>
                {TemplateToRender ? (
                    <TemplateToRender />
                ) : (
                    <p style={{ textAlign: 'center' }}>
                        Template '{templateName}' not found. Please select a valid template.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FinalCV;