import React from "react";
import { useResumeContext } from "../useContext/UseContext";
import "./Tpl4.css";

const Tpl4 = ({ resumeData, sections }) => {
  const {
    personalInfo,
    summary,
    experience,
    education,
    skills,
    customSections,
  } = resumeData;

  return (
    <div className="executive-resume">
      <header className="executive-header">
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p>
          {personalInfo.email} | {personalInfo.phone} |{" "}
          {personalInfo.addressLine1}, {personalInfo.addressLine2}
        </p>
      </header>
      <hr className="executive-divider" />
      {sections.summary && summary && (
        <section className="executive-section">
          <h2 className="executive-title">Summary</h2>
          <p>{summary}</p>
        </section>
      )}
      {sections.experience && experience?.length > 0 && (
        <section className="executive-section">
          <h2 className="executive-title">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="executive-item breakable-unit">
              <div className="item-header">
                <h3>{exp.jobTitle}</h3>
                <span>
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <div className="item-subheader">
                <h4>{exp.company}</h4>
                <span>{exp.location}</span>
              </div>
              <ul>
                {exp.responsibilities?.map(
                  (resp, i) => resp && <li key={i}>{resp}</li>
                )}
              </ul>
            </div>
          ))}
        </section>
      )}
      {sections.education && education?.length > 0 && (
        <section className="executive-section">
          <h2 className="executive-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="executive-item breakable-unit">
              <div className="item-header">
                <h3>{edu.degree}</h3>
                <span>{edu.graduationDate}</span>
              </div>
              <div className="item-subheader">
                <h4>{edu.school}</h4>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </section>
      )}
      {sections.skills && skills?.length > 0 && (
        <section className="executive-section">
          <h2 className="executive-title">Skills</h2>
          <p className="skills-text">{skills.join(", ")}</p>
        </section>
      )}
      {customSections?.map((section) => (
        <section key={section.id} className="executive-section breakable-unit">
          <h2 className="executive-title">{section.title}</h2>
          <div className="executive-item">
            <ul>
              {section.details?.map(
                (detail, i) => detail && <li key={i}>{detail}</li>
              )}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};
const Tpl4Wrapper = () => {
  const { resumeData, sections } = useResumeContext();
  if (!resumeData) return null;
  return <Tpl4 resumeData={resumeData} sections={sections || {}} />;
};
export default Tpl4Wrapper;
