import React from 'react';
import { useResumeContext } from '../useContext/UseContext';
import './Tpl3.css'; // Create this new CSS file

const Tpl3 = () => {
    const { resumeData } = useResumeContext();
    const { personalInfo, summary, experience, education, skills } = resumeData;

    return (
        <div className="creative-resume">
            <header className="creative-header">
                <div className="header-content">
                    {personalInfo.profileImage && (
                        <img src={personalInfo.profileImage} alt="Profile" className="creative-profile-img" />
                    )}
                    <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                    <p className="contact-line">
                        {personalInfo.email} | {personalInfo.phone} | {personalInfo.addressLine1}
                    </p>
                </div>
            </header>

            <main className="creative-body">
                <section className="creative-section summary">
                    <h2>Summary</h2>
                    <p>{summary}</p>
                </section>
                
                <hr className="section-divider" />

                <div className="columns-container">
                    <div className="main-column">
                        <section className="creative-section">
                            <h2>Experience</h2>
                            {experience.map(exp => (
                                <div key={exp.id} className="job">
                                    <h3>{exp.jobTitle}</h3>
                                    <h4>{exp.company} | {exp.startDate} - {exp.endDate}</h4>
                                    <ul>
                                        {exp.responsibilities?.map((resp, i) => resp && <li key={i}>{resp}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    </div>
                    <div className="side-column">
                        <section className="creative-section">
                            <h2>Education</h2>
                             {education.map(edu => (
                                <div key={edu.id} className="job">
                                    <h3>{edu.degree}</h3>
                                    <h4>{edu.school}</h4>
                                    <p>{edu.graduationDate}</p>
                                </div>
                            ))}
                        </section>
                        <section className="creative-section">
                            <h2>Skills</h2>
                            <ul className="creative-skills-list">
                                {skills.map((skill, i) => skill && <li key={i}>{skill}</li>)}
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Tpl3;