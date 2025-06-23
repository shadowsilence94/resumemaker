import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import styles from "./Tpl5.module.css";

const Tpl5 = ({ resumeData: propResumeData }) => {
  const { resumeData: contextResumeData, sections } = useResumeContext();
  const resumeData = propResumeData || contextResumeData;

  if (!resumeData) return null;

  const { personalInfo, summary, experience, education, skills } = resumeData;

  const formatUrl = (url) => {
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

  return (
    <div className={styles.tpl5Resume}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {personalInfo?.profileImage && (
            <img
              src={personalInfo.profileImage}
              alt="Profile"
              className={styles.profileImg}
            />
          )}
        </div>
        <div className={styles.headerRight}>
          <h1>
            {personalInfo?.firstName} {personalInfo?.lastName}
          </h1>
          <div className={styles.contactInfo}>
            {personalInfo?.email && <div>{personalInfo.email}</div>}
            {personalInfo?.phone && <div>{personalInfo.phone}</div>}
            {personalInfo?.addressLine1 && (
              <div>
                {personalInfo.addressLine1} {personalInfo?.addressLine2}
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
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.summaryText}>{summary}</p>
        </section>
      )}
      {sections?.experience && (experience || []).length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          {(experience || []).map((exp, index) => (
            <div key={exp.id || index} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{exp.jobTitle}</h3>
                  <h4 className={styles.itemSubtitle}>{exp.company}</h4>
                </div>
                <div>
                  <span className={styles.itemDate}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                  {exp.location && (
                    <span className={styles.itemSubtitle}>
                      {" "}
                      • {exp.location}
                    </span>
                  )}
                </div>
              </div>
              {(exp.responsibilities || []).length > 0 && (
                <ul className={styles.itemDescription}>
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
          <h2 className={styles.sectionTitle}>Education</h2>
          {(education || []).map((edu, index) => (
            <div key={edu.id || index} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{edu.degree}</h3>
                  <h4 className={styles.itemSubtitle}>{edu.school}</h4>
                </div>
                <div>
                  <span className={styles.itemDate}>{edu.graduationDate}</span>
                  {edu.location && (
                    <span className={styles.itemSubtitle}>
                      {" "}
                      • {edu.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
      {sections?.skills && (skills || []).length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsList}>
            {(skills || []).map(
              (skill, index) =>
                skill && (
                  <span key={index} className={styles.skillItem}>
                    {skill}
                  </span>
                )
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Tpl5;
