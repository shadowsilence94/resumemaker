import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import styles from "./Tpl2.module.css";

const Tpl2 = ({ resumeData: propResumeData }) => {
  const { resumeData: contextResumeData, sections } = useResumeContext();
  const resumeData = propResumeData || contextResumeData;

  if (!resumeData) return null;

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
    <div className={styles.sidebarResume}>
      <aside className={styles.resumeSidebar}>
        {personalInfo?.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt="Profile"
            className={styles.sidebarProfileImg}
          />
        )}
        <div className={styles.sidebarSection}>
          <h3>Contact</h3>
          {personalInfo?.email && (
            <p>
              <strong>Email:</strong> {personalInfo.email}
            </p>
          )}
          {personalInfo?.phone && (
            <p>
              <strong>Phone:</strong> {personalInfo.phone}
            </p>
          )}
          {personalInfo?.addressLine1 && (
            <p>
              <strong>Address:</strong> {personalInfo.addressLine1}
              {personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}
            </p>
          )}
          {personalInfo?.linkedIn && (
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href={formatUrl(personalInfo.linkedIn)}>Profile</a>
            </p>
          )}
          {personalInfo?.portfolio && (
            <p>
              <strong>Portfolio:</strong>{" "}
              <a href={formatUrl(personalInfo.portfolio)}>Link</a>
            </p>
          )}
        </div>
        {sections?.skills && (skills || []).length > 0 && (
          <div className={styles.sidebarSection}>
            <h3>Skills</h3>
            <ul className={styles.sidebarSkills}>
              {(skills || []).map(
                (skill, index) => skill && <li key={index}>{skill}</li>
              )}
            </ul>
          </div>
        )}
      </aside>
      <main className={styles.resumeMain}>
        <header className={styles.mainHeader}>
          <h1>
            {personalInfo?.firstName} {personalInfo?.lastName}
          </h1>
        </header>
        {sections?.summary && summary && (
          <section className={styles.mainSection}>
            <h2>Summary</h2>
            <p>{summary}</p>
          </section>
        )}
        {sections?.experience && (experience || []).length > 0 && (
          <section className={styles.mainSection}>
            <h2>Experience</h2>
            {(experience || []).map((exp, index) => (
              <div key={exp.id || index} className={styles.mainJob}>
                <div className={styles.jobHeader}>
                  <h3>{exp.jobTitle}</h3>
                  <span>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className={styles.jobSubheader}>
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
          <section className={styles.mainSection}>
            <h2>Education</h2>
            {(education || []).map((edu, index) => (
              <div key={edu.id || index} className={styles.mainJob}>
                <div className={styles.jobHeader}>
                  <h3>{edu.degree}</h3>
                  <span>{edu.graduationDate}</span>
                </div>
                <div className={styles.jobSubheader}>
                  <h4>{edu.school}</h4>
                  {edu.location && <span>{edu.location}</span>}
                </div>
              </div>
            ))}
          </section>
        )}
        {/* Added Custom Sections */}
        {(customSections || []).map(
          (section) =>
            sections?.customSections && (
              <section key={section.id} className={styles.mainSection}>
                <h2>{section.title}</h2>
                <ul>
                  {(section.details || []).map(
                    (detail, idx) => detail && <li key={idx}>{detail}</li>
                  )}
                </ul>
              </section>
            )
        )}
      </main>
    </div>
  );
};

export default Tpl2;
