import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import "./Tpl4.css";

const Tpl4 = ({ resumeData: propResumeData, sections: propSections }) => {
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
    <div className="executive-resume">
      <header className="executive-header">
        <div className="header-main">
          <h1>
            {personalInfo?.firstName} {personalInfo?.lastName}
          </h1>
          <div className="contact-details">
            {personalInfo?.email && <span>{personalInfo.email}</span>}
            {personalInfo?.phone && <span> • {personalInfo.phone}</span>}
            {personalInfo?.addressLine1 && (
              <span>
                {" "}
                • {personalInfo.addressLine1}
                {personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}
              </span>
            )}
            {personalInfo?.linkedIn && (
              <span>
                {" "}
                • <a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a>
              </span>
            )}
            {personalInfo?.portfolio && (
              <span>
                {" "}
                • <a href={formatUrl(personalInfo.portfolio)}>Portfolio</a>
              </span>
            )}
          </div>
        </div>
        {personalInfo?.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt="Profile"
            className="executive-profile-img"
          />
        )}
      </header>

      {sections?.summary && summary && (
        <section className="executive-section">
          <h2 className="executive-title">Executive Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {sections?.experience && (experience || []).length > 0 && (
        <section className="executive-section">
          <h2 className="executive-title">Professional Experience</h2>
          {(experience || []).map((exp, index) => (
            <div key={exp.id || index} className="executive-job">
              <div className="job-title-line">
                <h3>{exp.jobTitle}</h3>
                <span className="job-period">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <div className="job-company-line">
                <h4>{exp.company}</h4>
                {exp.location && (
                  <span className="job-location">{exp.location}</span>
                )}
              </div>
              {(exp.responsibilities || []).length > 0 && (
                <ul className="job-achievements">
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
        <section className="executive-section">
          <h2 className="executive-title">Education</h2>
          {(education || []).map((edu, index) => (
            <div key={edu.id || index} className="executive-job">
              <div className="job-title-line">
                <h3>{edu.degree}</h3>
                <span className="job-period">{edu.graduationDate}</span>
              </div>
              <div className="job-company-line">
                <h4>{edu.school}</h4>
                {edu.location && (
                  <span className="job-location">{edu.location}</span>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {sections?.skills && (skills || []).length > 0 && (
        <section className="executive-section">
          <h2 className="executive-title">Core Competencies</h2>
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
            <section key={section.id || index} className="executive-section">
              <h2 className="executive-title">{section.title}</h2>
              {(section.details || []).length > 0 && (
                <ul>
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

export default Tpl4;
