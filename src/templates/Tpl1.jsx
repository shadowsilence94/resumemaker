import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl1.css';

const Tpl1 = ({ resumeData, sections }) => {
    const { personalInfo, summary, experience, education, skills, customSections } = resumeData;
    const formatUrl = (url) => {
        if (!url) return '#';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    return (
        <div className="modern-resume">
            <header className="modern-header">
                {personalInfo.profileImage && (
                    <img src={personalInfo.profileImage} alt="Profile" className="modern-profile-img" />
                )}
                <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                <div className="modern-contact-info">
                    {personalInfo.email && <span>{personalInfo.email}</span>}
                    {personalInfo.phone && <span>• {personalInfo.phone}</span>}
                    {personalInfo.addressLine1 && <span>• {personalInfo.addressLine1}, {personalInfo.addressLine2}</span>}
                    {personalInfo.linkedIn && <span>• <a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a></span>}
                    {personalInfo.portfolio && <span>• <a href={formatUrl(personalInfo.portfolio)}>Portfolio</a></span>}
                </div>
            </header>
            {sections.summary && summary && (<section className="modern-section"><h2>Summary</h2><p>{summary}</p></section>)}
            {sections.experience && experience?.length > 0 && (
                <section className="modern-section"><h2>Experience</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className="modern-job breakable-unit">
                            <div className="job-header"><h3>{exp.jobTitle}</h3><span>{exp.startDate} – {exp.endDate}</span></div>
                            <div className="job-subheader"><h4>{exp.company}</h4><span>{exp.location}</span></div>
                            <ul>{exp.responsibilities?.map((resp, i) => resp && <li key={i}>{resp}</li>)}</ul>
                        </div>
                    ))}
                </section>
            )}
            {sections.education && education?.length > 0 && (
                <section className="modern-section"><h2>Education</h2>
                    {education.map(edu => (
                         <div key={edu.id} className="modern-job breakable-unit">
                            <div className="job-header"><h3>{edu.degree}</h3><span>{edu.graduationDate}</span></div>
                            <div className="job-subheader"><h4>{edu.school}</h4><span>{edu.location}</span></div>
                        </div>
                    ))}
                </section>
            )}
            {sections.skills && skills?.length > 0 && (
                <section className="modern-section"><h2>Skills</h2>
                    <ul className="modern-skills-list">{skills.map((skill, i) => skill && <li key={i}>{skill}</li>)}</ul>
                </section>
            )}
            {customSections?.map(section => (
                 <section key={section.id} className="modern-section breakable-unit">
                    <h2>{section.title}</h2>
                    <div className="modern-job">
                        <ul>{section.details?.map((detail, i) => detail && <li key={i}>{detail}</li>)}</ul>
                    </div>
                </section>
            ))}
        </div>
    );
};
const Tpl1Wrapper = () => {
    const { resumeData, sections } = useResumeContext();
    if (!resumeData) return null;
    return <Tpl1 resumeData={resumeData} sections={sections || {}} />;
};
export default Tpl1Wrapper;