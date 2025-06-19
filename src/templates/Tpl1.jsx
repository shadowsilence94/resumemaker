import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl1.css'; // We will create this new CSS file

const Tpl1 = () => {
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

            <section className="modern-section">
                <h2>Summary</h2>
                <p>{summary}</p>
            </section>

            <section className="modern-section">
                <h2>Experience</h2>
                {experience.map(exp => (
                    <div key={exp.id} className="modern-job">
                        <div className="job-header">
                            <h3>{exp.jobTitle}</h3>
                            <span>{exp.startDate} – {exp.endDate}</span>
                        </div>
                        <div className="job-subheader">
                            <h4>{exp.company}</h4>
                            <span>{exp.location}</span>
                        </div>
                        <ul>
                            {exp.responsibilities?.map((resp, index) => (
                                resp && <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            
            <section className="modern-section">
                <h2>Education</h2>
                {education.map(edu => (
                     <div key={edu.id} className="modern-job">
                        <div className="job-header">
                            <h3>{edu.degree}</h3>
                            <span>{edu.graduationDate}</span>
                        </div>
                        <div className="job-subheader">
                            <h4>{edu.school}</h4>
                             <span>{edu.location}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="modern-section">
                <h2>Skills</h2>
                <ul className="modern-skills-list">
                    {skills.map((skill, index) => (
                        skill && <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Tpl1;