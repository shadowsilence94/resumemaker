import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FileDown, Layers } from 'lucide-react';

import Tpl1 from '../templates/Tpl1';
import Tpl2 from '../templates/Tpl2';
import Tpl3 from '../templates/Tpl3';
import Tpl4 from '../templates/Tpl4';
import Tpl5 from '../templates/Tpl5';

const templateMap = { tpl1: Tpl1, tpl2: Tpl2, tpl3: Tpl3, tpl4: Tpl4, tpl5: Tpl5 };

const FinalCV = () => {
    const { templateId } = useParams();
    const resumeRef = useRef();
    const TemplateToRender = templateMap[templateId];

    const handleDownloadPdf = () => {
        const input = resumeRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${templateId}-resume.pdf`);
        });
    };

    return (
        <div>
            <div className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 flex flex-wrap justify-center items-center gap-4 sticky top-[60px] z-10 border-b border-gray-200 dark:border-gray-800">
                <button onClick={handleDownloadPdf} className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    <FileDown size={18} className="mr-2"/> Download as PDF
                </button>
                <Link to="/templates" className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    <Layers size={18} className="mr-2"/> Change Template
                </Link>
            </div>
            <div ref={resumeRef}>
                {TemplateToRender ? <TemplateToRender /> : <p className="text-center p-8">Template not found.</p>}
            </div>
        </div>
    );
};
export default FinalCV;