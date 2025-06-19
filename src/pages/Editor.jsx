import React, { useState } from 'react';
import { useResumeContext } from '../useContext/UseContext';
import ImageCropper from '../components/ImageCropper';
import './Editor.css';

const Editor = () => {
    const { resumeData, setResumeData } = useResumeContext();
    const [imageForCropping, setImageForCropping] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageForCropping(reader.result);
            };
            reader.readAsDataURL(file);
        }
        e.target.value = null;
    };

    const handleCropComplete = (croppedImage) => {
        setResumeData(prev => ({
            ...prev,
            personalInfo: {
                ...prev.personalInfo,
                profileImage: croppedImage,
            }
        }));
        setImageForCropping(null);
    };

    const handleChange = (e, section) => {
        const { name, value } = e.target;
        setResumeData(prev => ({
            ...prev,
            [section]: { ...prev[section], [name]: value, }
        }));
    };
    
    const handleSummaryChange = (e) => {
         setResumeData(prev => ({ ...prev, summary: e.target.value }));
    };

    const handleArrayChange = (e, index, section, field) => {
        const newArray = [...resumeData[section]];
        newArray[index][field] = e.target.value;
        setResumeData(prev => ({ ...prev, [section]: newArray }));
    };

    const handleResponsibilitiesChange = (e, index) => {
        const newExperience = [...resumeData.experience];
        newExperience[index].responsibilities = e.target.value.split('\n');
        setResumeData(prev => ({...prev, experience: newExperience}));
    };

    const addArrayItem = (section) => {
        let newItem;
        if (section === 'experience') {
            newItem = { id: Date.now(), jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: [''] };
        } else if (section === 'education') {
            newItem = { id: Date.now(), degree: '', school: '', location: '', graduationDate: '' };
        }
        if (newItem) {
            setResumeData(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
        }
    };

    const removeArrayItem = (index, section) => {
        const newArray = [...resumeData[section]];
        newArray.splice(index, 1);
        setResumeData(prev => ({ ...prev, [section]: newArray }));
    };
    
    const handleSkillChange = (e, index) => {
        const newSkills = [...resumeData.skills];
        newSkills[index] = e.target.value;
        setResumeData(prev => ({...prev, skills: newSkills}));
    }
    const addSkill = () => {
        setResumeData(prev => ({...prev, skills: [...prev.skills, '']}));
    }
     const removeSkill = (index) => {
        const newSkills = [...resumeData.skills];
        newSkills.splice(index, 1);
        setResumeData(prev => ({ ...prev, skills: newSkills }));
    };

    return (
        <div className="editor-container">
            {imageForCropping && (
                <ImageCropper
                    imageSrc={imageForCropping}
                    onCropComplete={handleCropComplete}
                    onClose={() => setImageForCropping(null)}
                />
            )}

            <h2>Resume Details</h2>
            <fieldset>
                <legend>Personal Information</legend>
                <div className="profile-image-section">
                    <div className="image-uploader">
                        <label htmlFor="profile-image-upload" className="upload-label">
                            {resumeData.personalInfo.profileImage ? 'Change Image' : 'Upload Image'}
                        </label>
                        <input
                            id="profile-image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    {resumeData.personalInfo.profileImage && (
                        <img 
                            src={resumeData.personalInfo.profileImage} 
                            alt="Profile Preview" 
                            className="profile-preview"
                        />
                    )}
                </div>

                <input name="firstName" value={resumeData.personalInfo.firstName} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="First Name" />
                <input name="lastName" value={resumeData.personalInfo.lastName} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="Last Name" />
                <input name="email" value={resumeData.personalInfo.email} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="Email" />
                <input name="phone" value={resumeData.personalInfo.phone} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="Phone" />
                <input name="addressLine1" value={resumeData.personalInfo.addressLine1} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="Address Line 1" />
                <input name="addressLine2" value={resumeData.personalInfo.addressLine2} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="Address Line 2 (City, Country)" />
                <input name="linkedIn" value={resumeData.personalInfo.linkedIn} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="LinkedIn Profile URL" />
                <input name="portfolio" value={resumeData.personalInfo.portfolio} onChange={(e) => handleChange(e, 'personalInfo')} placeholder="Portfolio/GitHub URL" />
            </fieldset>

             <fieldset>
                <legend>Professional Summary</legend>
                <textarea name="summary" value={resumeData.summary} onChange={handleSummaryChange} placeholder="Write a brief summary..."></textarea>
            </fieldset>
            <fieldset>
                <legend>Work Experience</legend>
                {resumeData.experience.map((exp, index) => (
                    <div key={exp.id} className="array-item">
                        <input value={exp.jobTitle} onChange={(e) => handleArrayChange(e, index, 'experience', 'jobTitle')} placeholder="Job Title" />
                        <input value={exp.company} onChange={(e) => handleArrayChange(e, index, 'experience', 'company')} placeholder="Company" />
                        <input value={exp.location} onChange={(e) => handleArrayChange(e, index, 'experience', 'location')} placeholder="Location" />
                        <input value={exp.startDate} onChange={(e) => handleArrayChange(e, index, 'experience', 'startDate')} placeholder="Start Date (e.g., Jan 2022)" />
                        <input value={exp.endDate} onChange={(e) => handleArrayChange(e, index, 'experience', 'endDate')} placeholder="End Date (e.g., Present)" />
                        <textarea 
                            value={(exp.responsibilities || []).join('\n')} 
                            onChange={(e) => handleResponsibilitiesChange(e, index)} 
                            placeholder="Responsibilities (one per line)"
                        ></textarea>
                        
                        <button onClick={() => removeArrayItem(index, 'experience')} className="remove-btn">Remove</button>
                    </div>
                ))}
                <button onClick={() => addArrayItem('experience')} className="add-btn">Add Experience</button>
            </fieldset>
             <fieldset>
                <legend>Education</legend>
                {resumeData.education.map((edu, index) => (
                    <div key={edu.id} className="array-item">
                        <input value={edu.degree} onChange={(e) => handleArrayChange(e, index, 'education', 'degree')} placeholder="Degree or Certification" />
                        <input value={edu.school} onChange={(e) => handleArrayChange(e, index, 'education', 'school')} placeholder="School or Institution" />
                        <input value={edu.location} onChange={(e) => handleArrayChange(e, index, 'education', 'location')} placeholder="Location" />
                        <input value={edu.graduationDate} onChange={(e) => handleArrayChange(e, index, 'education', 'graduationDate')} placeholder="Graduation Date" />
                        <button onClick={() => removeArrayItem(index, 'education')} className="remove-btn">Remove</button>
                    </div>
                ))}
                <button onClick={() => addArrayItem('education')} className="add-btn">Add Education</button>
            </fieldset>
             <fieldset>
                <legend>Skills</legend>
                {resumeData.skills.map((skill, index) => (
                     <div key={index} className="array-item-skill">
                        <input value={skill} onChange={(e) => handleSkillChange(e, index)} placeholder="e.g., React"/>
                        <button onClick={() => removeSkill(index)} className="remove-btn-skill">X</button>
                     </div>
                ))}
                <button onClick={addSkill} className="add-btn">Add Skill</button>
            </fieldset>
        </div>
    );
};

export default Editor;