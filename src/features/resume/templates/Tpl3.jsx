import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import "./Tpl3.css";

const Tpl3 = ({ resumeData: propResumeData, sections: propSections }) => {
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
    <div className="creative-resume">
      <header className="creative-header">
        {personalInfo?.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt="Profile"
            className="creative-profile-img"
          />
        )}
        <h1>
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h1>
        <div className="contact-line">
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span> • {personalInfo.phone}</span>}
        </div>
        <div className="contact-line">
          {personalInfo?.addressLine1 && (
            <span>
              {personalInfo.addressLine1}
              {personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}
            </span>
          )}
        </div>
        <div className="contact-line">
           {personalInfo?.linkedIn && (
              <span><a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a></span>
            )}
            {personalInfo?.portfolio && (
              <span> • <a href={formatUrl(personalInfo.portfolio)}>Portfolio</a></span>
            )}
        </div>
      </header>

      <div className="creative-body">
        {sections?.summary && summary && (
          <section className="creative-section">
            <h2>Summary</h2>
            <p className="creative-summary">{summary}</p>
          </section>
        )}

        {sections?.experience && experience?.length > 0 && (
          <section className="creative-section">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
              <div key={exp.id || index} className="creative-item"> {/* Corrected class */}
                <div className="creative-item-header">
                  <div>
                    <h3>{exp.jobTitle}</h3>
                    <h4>{exp.company} • {exp.location}</h4>
                  </div>
                  <span className="creative-date">{exp.startDate} - {exp.endDate}</span>
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul>
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
              <div key={edu.id || index} className="creative-item"> {/* Corrected class */}
                <div className="creative-item-header">
                  <div>
                    <h3>{edu.degree}</h3>
                    <h4>{edu.school} • {edu.location}</h4>
                  </div>
                  <span className="creative-date">{edu.graduationDate}</span>
                </div>
              </div>
            ))}
          </section>
        )}

        {sections?.skills && skills?.length > 0 && (
          <section className="creative-section">
            <h2>Skills</h2>
            <div className="creative-skills">
              {skills.map((skill, index) => (
                skill && <span key={index} className="creative-skill">{skill}</span>
              ))}
            </div>
          </section>
        )}

        {sections?.customSections && customSections.map((section, index) => (
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