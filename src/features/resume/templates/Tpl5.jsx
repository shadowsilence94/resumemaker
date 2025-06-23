import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import "./Tpl5.css";

const Tpl5 = ({ resumeData: propResumeData, sections: propSections }) => {
  const context = useResumeContext();
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
                className="profile-img"
              />
            </div>
          )}
        </div>
        <div className="header-right">
          <h1>
            {personalInfo?.firstName} {personalInfo?.lastName}
          </h1>
          <div className="contact-info">
            {personalInfo?.email && <div>{personalInfo.email}</div>}
            {personalInfo?.phone && <div>{personalInfo.phone}</div>}
            {personalInfo?.addressLine1 && (
              <div>
                {personalInfo.addressLine1}
                {personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}
              </div>
            )}
            {personalInfo?.linkedIn && (
              <div>
                <a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a>
              </div>
            )}
            {personalInfo?.portfolio && (
              <div>
                <a href={formatUrl(personalInfo.portfolio)}>Portfolio</a>
              </div>
            )}
          </div>
        </div>
      </header>

      {sections?.summary && summary && (
        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary-text">{summary}</p>
        </section>
      )}

      {sections?.experience && (experience || []).length > 0 && (
        <section className="section">
          <h2 className="section-title">Work Experience</h2>
          {(experience || []).map((exp, index) => (
            <div key={exp.id || index} className="section-item">
              <div className="item-header">
                <div>
                  <h3 className="item-title">{exp.jobTitle}</h3>
                  <h4 className="item-subtitle">{exp.company}</h4>
                </div>
                <div>
                  <span className="item-date">
                    {exp.startDate} - {exp.endDate}
                  </span>
                  {exp.location && (
                    <span className="item-subtitle"> • {exp.location}</span>
                  )}
                </div>
              </div>
              {(exp.responsibilities || []).length > 0 && (
                <ul className="item-description">
                  {(exp.responsibilities || []).map(
                    (resp, idx) => resp && <li key={idx}>{resp}</li>
                  )}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {sections?.education && (education || []).length > 0 && (
        <section className="section">
          <h2 className="section-title">Education</h2>
          {(education || []).map((edu, index) => (
            <div key={edu.id || index} className="section-item">
              <div className="item-header">
                <div>
                  <h3 className="item-title">{edu.degree}</h3>
                  <h4 className="item-subtitle">{edu.school}</h4>
                </div>
                <div>
                  <span className="item-date">{edu.graduationDate}</span>
                  {edu.location && (
                    <span className="item-subtitle"> • {edu.location}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {sections?.skills && (skills || []).length > 0 && (
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-list">
            {(skills || []).map(
              (skill, index) =>
                skill && (
                  <span key={index} className="skill-item">
                    {skill}
                  </span>
                )
            )}
          </div>
        </section>
      )}

      {(customSections || []).map(
        (section, index) =>
          sections?.customSections && (
            <section key={section.id || index} className="section">
              <h2 className="section-title">{section.title}</h2>
              {(section.details || []).length > 0 && (
                <ul className="item-description">
                  {(section.details || []).map(
                    (detail, idx) => detail && <li key={idx}>{detail}</li>
                  )}
                </ul>
              )}
            </section>
          )
      )}
    </div>
  );
};

export default Tpl5;
