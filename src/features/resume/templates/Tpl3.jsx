import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import "./Tpl3.css";

const Tpl3 = ({ resumeData: propResumeData, sections: propSections }) => {
  const context = useResumeContext();
  
  // Use props if provided (for template selection), otherwise use context
  const resumeData = propResumeData || context?.resumeData;
  const sections = propSections || context?.sections;
  
  if (!resumeData) return <div>No data available</div>;
  
  const {
    personalInfo,
    summary,
    experience,
    education,
    skills,
    customSections,
  } = resumeData;

  const formatUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  return (
    <div className="creative-resume">
      <header className="creative-header">
        <div className="header-content">
          {personalInfo?.profileImage && (
            <img
              src={personalInfo.profileImage}
              alt="Profile"
              className="creative-profile-img"
            />
          )}
          <div className="header-text">
            <h1>{personalInfo?.firstName} {personalInfo?.lastName}</h1>
            <div className="contact-info">
              {personalInfo?.email && <span>{personalInfo.email}</span>}
              {personalInfo?.phone && <span> • {personalInfo.phone}</span>}
              {personalInfo?.addressLine1 && (
                <span> • {personalInfo.addressLine1}{personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}</span>
              )}
              {personalInfo?.linkedIn && (
                <span> • <a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a></span>
              )}
              {personalInfo?.portfolio && (
                <span> • <a href={formatUrl(personalInfo.portfolio)}>Portfolio</a></span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="creative-content">
        {sections?.summary && summary && (
          <section className="creative-section">
            <h2>Summary</h2>
            <p>{summary}</p>
          </section>
        )}

        {sections?.experience && experience?.length > 0 && (
          <section className="creative-section">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
              <div key={exp.id || index} className="creative-job">
                <div className="job-header">
                  <h3>{exp.jobTitle}</h3>
                  <span className="job-date">{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className="job-company">
                  <h4>{exp.company}</h4>
                  {exp.location && <span>{exp.location}</span>}
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="job-responsibilities">
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
          <section className="creative-section">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={edu.id || index} className="creative-job">
                <div className="job-header">
                  <h3>{edu.degree}</h3>
                  <span className="job-date">{edu.graduationDate}</span>
                </div>
                <div className="job-company">
                  <h4>{edu.school}</h4>
                  {edu.location && <span>{edu.location}</span>}
                </div>
              </div>
            ))}
          </section>
        )}

        {sections?.skills && skills?.length > 0 && (
          <section className="creative-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                skill && <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>
        )}

        {sections?.customSections && customSections?.length > 0 && customSections.map((section, index) => (
          <section key={section.id || index} className="creative-section">
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
      </div>
    </div>
  );
};

export default Tpl3;
