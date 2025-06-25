import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import styles from "./Tpl1.module.css";

const Tpl1 = ({ resumeData: propResumeData }) => {
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
    <div className={styles.modernResume}>
      <header className={styles.modernHeader}>
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
        <div className={styles.contactInfo}>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
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
        <section className={styles.section}>
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {sections?.experience && (experience || []).length > 0 && (
        <section className={styles.section}>
          <h2>Experience</h2>
          {(experience || []).map((exp) => (
            <div key={exp.id} className={styles.job}>
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
        <section className={styles.section}>
          <h2>Education</h2>
          {(education || []).map((edu) => (
            <div key={edu.id} className={styles.job}>
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

      {sections?.skills && (skills || []).length > 0 && (
        <section className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            {(skills || []).map(
              (skill, index) => skill && <li key={index}>{skill}</li>
            )}
          </ul>
        </section>
      )}

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
  );
};

export default Tpl1;
