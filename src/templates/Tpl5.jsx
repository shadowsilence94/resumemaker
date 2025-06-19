import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl5.css';

const Tpl5 = ({ resumeData, sections }) => {
    const { personalInfo, summary, experience, education, skills, customSections } = resumeData;
    const formatUrl = (url) => { if (!url) return '#'; if (url.startsWith('http')) return url; return `https://${url}`; };

    return (
        <div className="tpl5-resume">
            <header className="resume-header">
                <div className="header-left">
                    {personalInfo.profileImage && (<div className="profile-image-container"><img src={personalInfo.profileImage} alt="Profile" /></div>)}
                    <div className="contact-info">
                        {personalInfo.linkedIn && (<a href={formatUrl(personalInfo.linkedIn)} target="_blank" rel="noopener noreferrer">LinkedIn</a>)}
                        {personalInfo.portfolio && (<a href={formatUrl(personalInfo.portfolio)} target="_blank" rel="noopener noreferrer">Portfolio</a>)}
                        <span className="address-line">{personalInfo.addressLine1}</span>
                        <span className="address-line">{personalInfo.addressLine2}</span>
                    </div>
                </div>
                <div className="header-right">
                    <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                    <p className="email">{personalInfo.email}</p>
                    <p className="phone">{personalInfo.phone}</p>
                </div>
            </header>
            {sections.summary && summary && (<section className="resume-section"><h2 className="section-title">Summary</h2><p>{summary}</p></section>)}
            {sections.experience && experience?.length > 0 && (
                <section className="resume-section"><h2 className="section-title">Experience</h2>
                    {experience.map((exp) => (
                        <div key={exp.id} className="job">
                            <div className="job-header"><h3 className="job-title">{exp.jobTitle}</h3><span className="job-dates">{exp.startDate} – {exp.endDate}</span></div>
                            <div className="job-subheader"><span className="job-company">{exp.company}</span>{exp.location && <span className="job-location"> | {exp.location}</span>}</div>
                            <ul className="job-responsibilities">{exp.responsibilities?.map((resp, i) => resp && <li key={i}>{resp}</li>)}</ul>
                        </div>
                    ))}
                </section>
            )}
            {sections.education && education?.length > 0 && (
                 <section className="resume-section"><h2 className="section-title">Education</h2>
                    {education.map((edu) => (
                        <div key={edu.id} className="education-item job">
                            <div className="job-header"><h3 className="job-title">{edu.degree}</h3><span className="job-dates">{edu.graduationDate}</span></div>
                            <div className="job-subheader"><span className="job-company">{edu.school}</span>{edu.location && <span className="job-location"> | {edu.location}</span>}</div>
                        </div>
                    ))}
                </section>
            )}
            {sections.skills && skills?.length > 0 && (
                <section className="resume-section"><h2 className="section-title">Skills</h2>
                    <ul className="skills-list">{skills.map((skill, i) => skill && <li key={i}>{skill}</li>)}</ul>
                </section>
            )}
            {customSections?.map(section => (
                 <section key={section.id} className="resume-section">
                    <h2 className="section-title">{section.title}</h2>
                    <ul className="job-responsibilities">{section.details?.map((detail, i) => detail && <li key={i}>{detail}</li>)}</ul>
                </section>
            ))}
        </div>
    );
};
const Tpl5Wrapper = () => {
    const { resumeData, sections } = useResumeContext();
    if (!resumeData) return null;
    return <Tpl5 resumeData={resumeData} sections={sections || {}} />;
};
export default Tpl5Wrapper;