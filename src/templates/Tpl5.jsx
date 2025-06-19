import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl5.css'; // Changed from ClassicTemplate.css

// Renamed component from ClassicTemplate to Tpl5
const Tpl5 = () => {
    const { resumeData } = useResumeContext();
    const { personalInfo } = resumeData;

    const formatUrl = (url) => {
        if (!url) return '#';
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    return (
        // Changed className from classic-resume to tpl5-resume
        <div className="tpl5-resume">
            <header className="resume-header">
                <div className="header-left">
                    {personalInfo.profileImage && (
                        <div className="profile-image-container">
                            <img src={personalInfo.profileImage} alt="Profile" />
                        </div>
                    )}
                    <div className="contact-info">
                        {personalInfo.linkedIn && (
                            <a href={formatUrl(personalInfo.linkedIn)} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        )}
                        {personalInfo.portfolio && (
                            <a href={formatUrl(personalInfo.portfolio)} target="_blank" rel="noopener noreferrer">Portfolio</a>
                        )}
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

            <section className="resume-section">
                <h2 className="section-title">Summary</h2>
                <p>{resumeData.summary}</p>
            </section>
            <section className="resume-section">
                <h2 className="section-title">Experience</h2>
                {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="job">
                        <div className="job-header">
                            <h3 className="job-title">{exp.jobTitle}</h3>
                            <span className="job-dates">{exp.startDate} – {exp.endDate}</span>
                        </div>
                        <div className="job-subheader">
                            <span className="job-company">{exp.company}</span>
                            {exp.location && <span className="job-location"> | {exp.location}</span>}
                        </div>
                        <ul className="job-responsibilities">
                            {exp.responsibilities?.map((resp, index) => (
                                resp && <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <section className="resume-section">
                <h2 className="section-title">Education</h2>
                {resumeData.education.map((edu) => (
                    <div key={edu.id} className="education-item job">
                         <div className="job-header">
                            <h3 className="job-title">{edu.degree}</h3>
                            <span className="job-dates">{edu.graduationDate}</span>
                        </div>
                        <div className="job-subheader">
                             <span className="job-company">{edu.school}</span>
                             {edu.location && <span className="job-location"> | {edu.location}</span>}
                        </div>
                    </div>
                ))}
            </section>
            <section className="resume-section">
                <h2 className="section-title">Skills</h2>
                <ul className="skills-list">
                    {resumeData.skills.map((skill, index) => (
                       skill && <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Tpl5; // Changed from ClassicTemplate