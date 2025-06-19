import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl2.css'; // We will create this new CSS file

const Tpl2 = () => {
    const { resumeData } = useResumeContext();
    const { personalInfo, summary, experience, education, skills } = resumeData;

    const formatUrl = (url) => {
        if (!url) return '#';
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    return (
        <div className="sidebar-resume">
            <aside className="resume-sidebar">
                {personalInfo.profileImage && (
                    <img src={personalInfo.profileImage} alt="Profile" className="sidebar-profile-img" />
                )}
                <div className="sidebar-section">
                    <h3>Contact</h3>
                    <p><strong>Email:</strong> {personalInfo.email}</p>
                    <p><strong>Phone:</strong> {personalInfo.phone}</p>
                    <p><strong>Address:</strong> {personalInfo.addressLine1}{personalInfo.addressLine2 && `, ${personalInfo.addressLine2}`}</p>
                    {personalInfo.linkedIn && <p><strong>LinkedIn:</strong> <a href={formatUrl(personalInfo.linkedIn)}>Profile</a></p>}
                    {personalInfo.portfolio && <p><strong>Portfolio:</strong> <a href={formatUrl(personalInfo.portfolio)}>Link</a></p>}
                </div>
                <div className="sidebar-section">
                    <h3>Education</h3>
                    {education.map(edu => (
                        <div key={edu.id} className="sidebar-edu">
                            <strong>{edu.degree}</strong>
                            <p>{edu.school}</p>
                            <p>{edu.graduationDate}</p>
                        </div>
                    ))}
                </div>
                <div className="sidebar-section">
                    <h3>Skills</h3>
                    <ul className="sidebar-skills-list">
                        {skills.map((skill, index) => (
                            skill && <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </aside>

            <main className="resume-main-content">
                <header className="main-header">
                    <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                </header>
                <section className="main-section">
                    <h2>Summary</h2>
                    <p>{summary}</p>
                </section>
                <section className="main-section">
                    <h2>Experience</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className="main-job">
                            <h3>{exp.jobTitle}</h3>
                            <h4>{exp.company} | {exp.startDate} - {exp.endDate}</h4>
                            <ul>
                                {exp.responsibilities?.map((resp, index) => (
                                    resp && <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Tpl2;