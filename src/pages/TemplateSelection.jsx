import React from 'react';
import { Link } from 'react-router-dom';
import './TemplateSelection.css';

// Import all templates
import Tpl1 from '../templates/Tpl1';
import Tpl2 from '../templates/Tpl2';
import Tpl3 from '../templates/Tpl3';
import Tpl4 from '../templates/Tpl4';
import Tpl5 from '../templates/Tpl5'; // Import the new Tpl5

// Updated templates array with new names
const templates = [
    { id: 'tpl1', name: 'Minimalist', Component: Tpl1 },
    { id: 'tpl2', name: 'Sidebar Professional', Component: Tpl2 },
    { id: 'tpl3', name: 'Creative Header', Component: Tpl3 },
    { id: 'tpl4', name: 'Formal Executive', Component: Tpl4 },
    { id: 'tpl5', name: 'Classic Professional', Component: Tpl5 },
];

const TemplateSelection = () => {
    return (
        <div className="template-selection-container">
            <h2>Choose Your Template</h2>
            <p>Your data is ready. Select a style below to see the final preview.</p>
            <div className="template-list">
                {templates.map(template => (
                    <Link to={`/final-cv/${template.id}`} key={template.id} className="template-preview-card">
                        <h3>{template.name}</h3>
                        <div className="template-preview-viewport">
                            <div className="template-preview-scaler">
                                <template.Component />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelection;