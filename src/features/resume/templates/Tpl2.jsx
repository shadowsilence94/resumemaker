import React from 'react';
import { useResumeContext } from '../../../context/ResumeContext';
import './Tpl2.css';

const Tpl2 = ({ resumeData: propResumeData, sections: propSections }) => {
    const context = useResumeContext();
    
    // Use props if provided (for template selection), otherwise use context
    const resumeData = propResumeData || context?.resumeData;
    const sections = propSections || context?.sections;
    
    if (!resumeData) return <div>No data available</div>;
    
    const { personalInfo, summary, experience, education, skills, customSections } = resumeData;
    
    const formatUrl = (url) => {
        if (!url) return '#';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="sidebar-resume">
            <aside className="resume-sidebar">
                {personalInfo?.profileImage && (
                    <img src={personalInfo.profileImage} alt="Profile" className="sidebar-profile-img" />
                )}
                <div className="sidebar-section">
                    <h3>Contact</h3>
                    {personalInfo?.email && <p><strong>Email:</strong> {personalInfo.email}</p>}
                    {personalInfo?.phone && <p><strong>Phone:</strong> {personalInfo.phone}</p>}
                    {personalInfo?.addressLine1 && (
                        <p><strong>Address:</strong> {personalInfo.addressLine1}{personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}</p>
                    )}
                    {personalInfo?.linkedIn && (
                        <p><strong>LinkedIn:</strong> <a href={formatUrl(personalInfo.linkedIn)}>Profile</a></p>
                    )}
                    {personalInfo?.portfolio && (
                        <p><strong>Portfolio:</strong> <a href={formatUrl(personalInfo.portfolio)}>Link</a></p>
                    )}
                </div>
                
                {sections?.skills && skills?.length > 0 && (
                    <div className="sidebar-section">
                        <h3>Skills</h3>
                        <ul className="sidebar-skills">
                            {skills.map((skill, index) => (
                                skill && <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </aside>
            
            <main className="resume-main">
                <header className="main-header">
                    <h1>{personalInfo?.firstName} {personalInfo?.lastName}</h1>
                </header>
                
                {sections?.summary && summary && (
                    <section className="main-section">
                        <h2>Summary</h2>
                        <p>{summary}</p>
                    </section>
                )}
                
                {sections?.experience && experience?.length > 0 && (
                    <section className="main-section">
                        <h2>Experience</h2>
                        {experience.map((exp, index) => (
                            <div key={exp.id || index} className="main-job">
                                <div className="job-header">
                                    <h3>{exp.jobTitle}</h3>
                                    <span>{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <div className="job-subheader">
                                    <h4>{exp.company}</h4>
                                    {exp.location && <span>{exp.location}</span>}
                                </div>
                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul>
                                        {exp.responsibilities.map((resp, idx) => (
                                            resp && <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </section>
                )}
                
                {sections?.education && education?.length > 0 && (
                    <section className="main-section">
                        <h2>Education</h2>
                        {education.map((edu, index) => (
                            <div key={edu.id || index} className="main-job">
                                <div className="job-header">
                                    <h3>{edu.degree}</h3>
                                    <span>{edu.graduationDate}</span>
                                </div>
                                <div className="job-subheader">
                                    <h4>{edu.school}</h4>
                                    {edu.location && <span>{edu.location}</span>}
                                </div>
                            </div>
                        ))}
                    </section>
                )}
                
                {sections?.customSections && customSections?.length > 0 && customSections.map((section, index) => (
                    <section key={section.id || index} className="main-section">
                        <h2>{section.title}</h2>
                        {section.details && section.details.length > 0 && (
                            <ul>
                                {section.details.map((detail, idx) => (
                                    detail && <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </main>
        </div>
    );
};

export default Tpl2;