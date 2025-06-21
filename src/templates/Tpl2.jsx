import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl2.css';

const Tpl2 = ({ resumeData, sections }) => {
    const { personalInfo, summary, experience, education, skills, customSections } = resumeData;
    const formatUrl = (url) => { if (!url) return '#'; if (url.startsWith('http')) return url; return `https://${url}`; };

    return (
        <div className="sidebar-resume">
            <aside className="resume-sidebar">
                {personalInfo.profileImage && (<img src={personalInfo.profileImage} alt="Profile" className="sidebar-profile-img" />)}
                <div className="sidebar-section">
                    <h3>Contact</h3>
                    <p><strong>Email:</strong> {personalInfo.email}</p>
                    <p><strong>Phone:</strong> {personalInfo.phone}</p>
                    <p><strong>Address:</strong> {personalInfo.addressLine1}{personalInfo.addressLine2 && `, ${personalInfo.addressLine2}`}</p>
                    {personalInfo.linkedIn && <p><strong>LinkedIn:</strong> <a href={formatUrl(personalInfo.linkedIn)}>Profile</a></p>}
                    {personalInfo.portfolio && <p><strong>Portfolio:</strong> <a href={formatUrl(personalInfo.portfolio)}>Link</a></p>}
                </div>
                {sections.education && education?.length > 0 && (
                    <div className="sidebar-section"><h3>Education</h3>
                        {education.map(edu => (<div key={edu.id} className="sidebar-edu breakable-unit"><strong>{edu.degree}</strong><p>{edu.school}</p><p>{edu.graduationDate}</p></div>))}
                    </div>
                )}
                {sections.skills && skills?.length > 0 && (
                    <div className="sidebar-section"><h3>Skills</h3>
                        <ul className="sidebar-skills-list">{skills.map((skill, i) => skill && <li key={i}>{skill}</li>)}</ul>
                    </div>
                )}
            </aside>
            <main className="resume-main-content">
                <header className="main-header"><h1>{personalInfo.firstName} {personalInfo.lastName}</h1></header>
                {sections.summary && summary && (<section className="main-section"><h2>Summary</h2><p>{summary}</p></section>)}
                {sections.experience && experience?.length > 0 && (
                    <section className="main-section"><h2>Experience</h2>
                        {experience.map(exp => (
                            <div key={exp.id} className="main-job breakable-unit">
                                <h3>{exp.jobTitle}</h3>
                                <h4>{exp.company} | {exp.startDate} - {exp.endDate}</h4>
                                <ul>{exp.responsibilities?.map((resp, i) => resp && <li key={i}>{resp}</li>)}</ul>
                            </div>
                        ))}
                    </section>
                )}
                {customSections?.map(section => (
                     <section key={section.id} className="main-section breakable-unit">
                        <h2>{section.title}</h2>
                        <div className="main-job">
                            <ul>{section.details?.map((detail, i) => detail && <li key={i}>{detail}</li>)}</ul>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};
const Tpl2Wrapper = () => {
    const { resumeData, sections } = useResumeContext();
    if (!resumeData) return null;
    return <Tpl2 resumeData={resumeData} sections={sections || {}} />;
};
export default Tpl2Wrapper;