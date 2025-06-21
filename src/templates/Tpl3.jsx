import React from "react";
import { useResumeContext } from "../useContext/UseContext";
import "./Tpl3.css";

const Tpl3 = ({ resumeData, sections }) => {
  const {
    personalInfo,
    summary,
    experience,
    education,
    skills,
    customSections,
  } = resumeData;

  return (
    <div className="creative-resume">
      <header className="creative-header">
        <div className="header-content">
          {personalInfo.profileImage && (
            <img
              src={personalInfo.profileImage}
              alt="Profile"
              className="creative-profile-img"
            />
          )}
          <h1>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="contact-line">
            {personalInfo.email} | {personalInfo.phone} |{" "}
            {personalInfo.addressLine1}
          </p>
        </div>
      </header>
      <main className="creative-body">
        {sections.summary && summary && (
          <section className="creative-section summary">
            <h2>Summary</h2>
            <p>{summary}</p>
          </section>
        )}
        <hr className="section-divider" />
        <div className="columns-container">
          <div className="main-column">
            {sections.experience && experience?.length > 0 && (
              <section className="creative-section">
                <h2>Experience</h2>
                {experience.map((exp) => (
                  <div key={exp.id} className="job breakable-unit">
                    <h3>{exp.jobTitle}</h3>
                    <h4>
                      {exp.company} | {exp.startDate} - {exp.endDate}
                    </h4>
                    <ul>
                      {exp.responsibilities?.map(
                        (resp, i) => resp && <li key={i}>{resp}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </section>
            )}
          </div>
          <div className="side-column">
            {sections.education && education?.length > 0 && (
              <section className="creative-section">
                <h2>Education</h2>
                {education.map((edu) => (
                  <div key={edu.id} className="job breakable-unit">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.school}</h4>
                    <p>{edu.graduationDate}</p>
                  </div>
                ))}
              </section>
            )}
            {sections.skills && skills?.length > 0 && (
              <section className="creative-section">
                <h2>Skills</h2>
                <ul className="creative-skills-list">
                  {skills.map((skill, i) => skill && <li key={i}>{skill}</li>)}
                </ul>
              </section>
            )}
          </div>
        </div>
        {customSections?.map((section) => (
          <section key={section.id} className="creative-section breakable-unit">
            <hr className="section-divider" />
            <h2>{section.title}</h2>
            <div className="job">
              <ul>
                {section.details?.map(
                  (detail, i) => detail && <li key={i}>{detail}</li>
                )}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};
const Tpl3Wrapper = () => {
  const { resumeData, sections } = useResumeContext();
  if (!resumeData) return null;
  return <Tpl3 resumeData={resumeData} sections={sections || {}} />;
};
export default Tpl3Wrapper;
