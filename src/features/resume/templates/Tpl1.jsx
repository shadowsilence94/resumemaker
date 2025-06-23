import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import "./Tpl1.css";

const Tpl1 = ({ resumeData: propResumeData, sections: propSections }) => {
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
    <div className="modern-resume">
      <header className="modern-header avoid-break">
        {personalInfo?.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt="Profile"
            className="modern-profile-img"
          />
        )}
        <h1>
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h1>
        <div className="modern-contact-info">
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo?.addressLine1 && (
            <span>
              • {personalInfo.addressLine1}
              {personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}
            </span>
          )}
          {personalInfo?.linkedIn && (
            <span>
              • <a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a>
            </span>
          )}
          {personalInfo?.portfolio && (
            <span>
              • <a href={formatUrl(personalInfo.portfolio)}>Portfolio</a>
            </span>
          )}
        </div>
      </header>

      {sections?.summary && summary && (
        <section className="modern-section avoid-break">
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {sections?.experience && (experience || []).length > 0 && (
        <section className="modern-section">
          <h2>Experience</h2>
          {(experience || []).map((exp, index) => (
            <div key={exp.id || index} className="modern-job keep-together">
              <div className="job-header">
                <h3>{exp.jobTitle}</h3>
                <span>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <div className="job-subheader">
                <h4>{exp.company}</h4>
                {exp.location && <span>{exp.location}</span>}
              </div>
              {(exp.responsibilities || []).length > 0 && (
                <ul>
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
        <section className="modern-section">
          <h2>Education</h2>
          {(education || []).map((edu, index) => (
            <div key={edu.id || index} className="modern-job keep-together">
              <div className="job-header">
                <h3>{edu.degree}</h3>
                <span>{edu.graduationDate}</span>
              </div>
              <div className="job-subheader">
                <h4>{edu.school}</h4>
                {edu.location && <span>{edu.location}</span>}
              </div>
            </div>
          ))}
        </section>
      )}

      {sections?.skills && (skills || []).length > 0 && (
        <section className="modern-section avoid-break">
          <h2>Skills</h2>
          <ul className="modern-skills-list">
            {(skills || []).map(
              (skill, index) => skill && <li key={index}>{skill}</li>
            )}
          </ul>
        </section>
      )}

      {(customSections || []).map(
        (section, index) =>
          sections?.customSections && (
            <section key={section.id || index} className="modern-section">
              <h2>{section.title}</h2>
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

export default Tpl1;
