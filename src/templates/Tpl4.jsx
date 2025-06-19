import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl4.css'; // Create this new CSS file

const Tpl4 = () => {
    const { resumeData } = useResumeContext();
    const { personalInfo, summary, experience, education, skills } = resumeData;

    return (
        <div className="executive-resume">
            <header className="executive-header">
                <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                <p>
                    {personalInfo.email} | {personalInfo.phone} | {personalInfo.addressLine1}, {personalInfo.addressLine2}
                </p>
            </header>
            
            <hr className="executive-divider" />
            
            <section className="executive-section">
                <h2 className="executive-title">Summary</h2>
                <p>{summary}</p>
            </section>

            <section className="executive-section">
                <h2 className="executive-title">Experience</h2>
                {experience.map(exp => (
                    <div key={exp.id} className="executive-item">
                        <div className="item-header">
                            <h3>{exp.jobTitle}</h3>
                            <span>{exp.startDate} – {exp.endDate}</span>
                        </div>
                        <div className="item-subheader">
                            <h4>{exp.company}</h4>
                            <span>{exp.location}</span>
                        </div>
                        <ul>
                            {exp.responsibilities?.map((resp, i) => resp && <li key={i}>{resp}</li>)}
                        </ul>
                    </div>
                ))}
            </section>

             <section className="executive-section">
                <h2 className="executive-title">Education</h2>
                {education.map(edu => (
                     <div key={edu.id} className="executive-item">
                        <div className="item-header">
                            <h3>{edu.degree}</h3>
                            <span>{edu.graduationDate}</span>
                        </div>
                        <div className="item-subheader">
                            <h4>{edu.school}</h4>
                             <span>{edu.location}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="executive-section">
                <h2 className="executive-title">Skills</h2>
                <p className="skills-text">{skills.join(', ')}</p>
            </section>
        </div>
    );
};

export default Tpl4;