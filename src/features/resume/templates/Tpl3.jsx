import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import styles from "./Tpl3.module.css";

const Tpl3 = ({ resumeData: propResumeData }) => {
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
    <div className={styles.creativeResume}>
      <header className={styles.header}>
        {personalInfo?.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt="Profile"
            className={styles.profileImg}
          />
        )}
        <h1>
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h1>
        <div className={styles.contactLine}>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span> • {personalInfo.phone}</span>}
        </div>
        <div className={styles.contactLine}>
          {personalInfo?.addressLine1 && (
            <span>
              {personalInfo.addressLine1}
              {personalInfo?.addressLine2 && `, ${personalInfo.addressLine2}`}
            </span>
          )}
        </div>
        <div className={styles.contactLine}>
          {personalInfo?.linkedIn && (
            <span>
              <a href={formatUrl(personalInfo.linkedIn)}>LinkedIn</a>
            </span>
          )}
          {personalInfo?.portfolio && (
            <span>
              {" "}
              • <a href={formatUrl(personalInfo.portfolio)}>Portfolio</a>
            </span>
          )}
        </div>
      </header>

      <div className={styles.body}>
        {sections?.summary && summary && (
          <section className={styles.section}>
            <h2>Summary</h2>
            <p className={styles.summary}>{summary}</p>
          </section>
        )}
        {sections?.experience && (experience || []).length > 0 && (
          <section className={styles.section}>
            <h2>Experience</h2>
            {(experience || []).map((exp, index) => (
              <div key={exp.id || index} className={styles.item}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3>{exp.jobTitle}</h3>
                    <h4>
                      {exp.company} • {exp.location}
                    </h4>
                  </div>
                  <span className={styles.date}>
                    {exp.startDate} - {exp.endDate}
                  </span>
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
          <section className={styles.section}>
            <h2>Education</h2>
            {(education || []).map((edu, index) => (
              <div key={edu.id || index} className={styles.item}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3>{edu.degree}</h3>
                    <h4>
                      {edu.school} • {edu.location}
                    </h4>
                  </div>
                  <span className={styles.date}>{edu.graduationDate}</span>
                </div>
              </div>
            ))}
          </section>
        )}
        {sections?.skills && (skills || []).length > 0 && (
          <section className={styles.section}>
            <h2>Skills</h2>
            <div className={styles.skills}>
              {(skills || []).map(
                (skill, index) =>
                  skill && (
                    <span key={index} className={styles.skill}>
                      {skill}
                    </span>
                  )
              )}
            </div>
          </section>
        )}
        {/* Added Custom Sections */}
        {(customSections || []).map(
          (section) =>
            sections?.customSections && (
              <section key={section.id} className={styles.section}>
                <h2>{section.title}</h2>
                <ul>
                  {(section.details || []).map(
                    (detail, idx) => detail && <li key={idx}>{detail}</li>
                  )}
                </ul>
              </section>
            )
        )}
      </div>
    </div>
  );
};

export default Tpl3;
