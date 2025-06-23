import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import "./Tpl5.css";

const Tpl5 = ({ resumeData: propResumeData, sections: propSections }) => {
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
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

  return (
    <div className="tpl5-resume">
      <header className="resume-header">
        <div className="header-left">
          {personalInfo?.profileImage && (
            <div className="profile-image-container">
              <img
                src={personalInfo.profileImage}
                alt="Profile"
              />
            </div>
          )}
          <div className="contact-info">
            {personalInfo?.email && <div className="email">{personalInfo.email}</div>}
            {personalInfo?.phone && <div className="phone">{personalInfo.phone}</div>}
            {personalInfo?.addressLine1 && (
              <div className="address-line">
                {personalInfo.addressLine1}
                {personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}
              </div>
            )}
            {personalInfo?.linkedIn && (
              <div><a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a></div>
            )}
            {personalInfo?.portfolio && (
              <div><a href={formatUrl(personalInfo.portfolio)}>Portfolio</a></div>
            )}
          </div>
        </div>
        <div className="header-right">
          <h1>{personalInfo?.firstName} {personalInfo?.lastName}</h1>
        </div>
      </header>

      {sections?.summary && summary && (
        <section className="classic-section">
          <h2>Professional Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {sections?.experience && experience?.length > 0 && (
        <section className="classic-section">
          <h2>Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={exp.id || index} className="classic-job">
              <div className="job-header">
                <div className="job-title-company">
                  <h3>{exp.jobTitle}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="job-details">
                  <span className="job-dates">{exp.startDate} - {exp.endDate}</span>
                  {exp.location && <span className="job-location">{exp.location}</span>}
                </div>
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
        <section className="classic-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={edu.id || index} className="classic-job">
              <div className="job-header">
                <div className="job-title-company">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                </div>
                <div className="job-details">
                  <span className="job-dates">{edu.graduationDate}</span>
                  {edu.location && <span className="job-location">{edu.location}</span>}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {sections?.skills && skills?.length > 0 && (
        <section className="classic-section">
          <h2>Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              skill && <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {sections?.customSections && customSections?.length > 0 && customSections.map((section, index) => (
        <section key={section.id || index} className="classic-section">
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
  );
};

export default Tpl5;
