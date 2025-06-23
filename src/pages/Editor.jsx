import { useState, useRef } from "react";
import { useResumeContext } from "../context/ResumeContext";
import ImageCropper from "../components/forms/ImageCropper";
import DatePicker from "../components/forms/DatePicker";
import {
  Edit3,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Image as ImageIcon,
} from "lucide-react";

const Editor = () => {
  const { resumeData, setResumeData, sections, setSections, clearResumeData } =
    useResumeContext();
  const fileInputRef = useRef(null);
  const [imageForCropping, setImageForCropping] = useState(null);

  const handleImagePreviewClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageForCropping(reader.result);
      };
      reader.onerror = () => {
        alert("Error reading the image file.");
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };
  const handleCropComplete = (croppedImage) => {
    updateField("personalInfo", "profileImage", croppedImage);
    setImageForCropping(null);
  };
  const handleClearAll = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all data? This cannot be undone."
      )
    ) {
      clearResumeData();
    }
  };
  const updateField = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };
  const updateNestedField = (index, section, field, value) => {
    const newArray = [...(resumeData[section] || [])];
    newArray[index] = { ...newArray[index], [field]: value };
    setResumeData((prev) => ({ ...prev, [section]: newArray }));
  };
  const addListItem = (section) => {
    let newItem;
    if (section === "experience")
      newItem = {
        id: Date.now(),
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        responsibilities: [""],
      };
    else if (section === "education")
      newItem = {
        id: Date.now(),
        degree: "",
        school: "",
        location: "",
        graduationDate: "",
      };
    else if (section === "skills") {
      setResumeData((prev) => ({
        ...prev,
        skills: [...(prev.skills || []), ""],
      }));
      return;
    } else if (section === "customSections")
      newItem = { id: Date.now(), title: "New Section", details: [""] };
    setResumeData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), newItem],
    }));
  };
  const removeListItem = (index, section) => {
    const newArray = [...resumeData[section]];
    newArray.splice(index, 1);
    setResumeData((prev) => ({ ...prev, [section]: newArray }));
  };
  const toggleSectionVisibility = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {imageForCropping && (
        <ImageCropper
          imageSrc={imageForCropping}
          onCropComplete={handleCropComplete}
          onClose={() => setImageForCropping(null)}
        />
      )}

      <div className="flex justify-center items-center mb-8 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center dark:text-white">
          Resume Editor
        </h1>
        <button
          onClick={handleClearAll}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center text-sm shadow-lg transition-transform transform hover:scale-105"
        >
          <Trash2 size={16} className="mr-2" /> Clear All
        </button>
      </div>
      <div className="space-y-8">
        <EditorSection title="Personal Information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex flex-col justify-center items-center space-y-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageFileChange}
                className="hidden"
                accept="image/*"
                id="profile-image-input"
              />
              <div
                onClick={handleImagePreviewClick}
                className="cursor-pointer group relative"
              >
                {resumeData.personalInfo.profileImage ? (
                  <img
                    src={resumeData.personalInfo.profileImage}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600"
                  />
                ) : (
                  <div className="w-40 h-40 rounded-full border-4 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                    <ImageIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                  </div>
                )}
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity">
                  <Edit3 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                value={resumeData.personalInfo.firstName}
                onChange={(e) =>
                  updateField("personalInfo", "firstName", e.target.value)
                }
              />
              <InputField
                label="Last Name"
                value={resumeData.personalInfo.lastName}
                onChange={(e) =>
                  updateField("personalInfo", "lastName", e.target.value)
                }
              />
              <InputField
                label="Email"
                type="email"
                value={resumeData.personalInfo.email}
                onChange={(e) =>
                  updateField("personalInfo", "email", e.target.value)
                }
              />
              <InputField
                label="Phone"
                value={resumeData.personalInfo.phone}
                onChange={(e) =>
                  updateField("personalInfo", "phone", e.target.value)
                }
              />
              <InputField
                label="Address Line 1"
                className="sm:col-span-2"
                value={resumeData.personalInfo.addressLine1}
                onChange={(e) =>
                  updateField("personalInfo", "addressLine1", e.target.value)
                }
              />
              <InputField
                label="Address Line 2"
                className="sm:col-span-2"
                value={resumeData.personalInfo.addressLine2}
                onChange={(e) =>
                  updateField("personalInfo", "addressLine2", e.target.value)
                }
              />
              <InputField
                label="LinkedIn"
                className="sm:col-span-2"
                value={resumeData.personalInfo.linkedIn}
                onChange={(e) =>
                  updateField("personalInfo", "linkedIn", e.target.value)
                }
              />
              <InputField
                label="Portfolio/Website"
                className="sm:col-span-2"
                value={resumeData.personalInfo.portfolio}
                onChange={(e) =>
                  updateField("personalInfo", "portfolio", e.target.value)
                }
              />
            </div>
          </div>
        </EditorSection>

        <EditorSection
          title="Professional Summary"
          isVisible={sections.summary}
          onToggle={() => toggleSectionVisibility("summary")}
        >
          <textarea
            value={resumeData.summary}
            onChange={(e) =>
              setResumeData((p) => ({ ...p, summary: e.target.value }))
            }
            rows="5"
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
        </EditorSection>

        <EditorSection
          title="Work Experience"
          isVisible={sections.experience}
          onToggle={() => toggleSectionVisibility("experience")}
        >
          {(resumeData.experience || []).map((exp, index) => (
            <div
              key={exp.id}
              className="p-4 border rounded-md mb-4 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Job Title"
                  value={exp.jobTitle}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "experience",
                      "jobTitle",
                      e.target.value
                    )
                  }
                />
                <InputField
                  label="Company"
                  value={exp.company}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "experience",
                      "company",
                      e.target.value
                    )
                  }
                />
                <DatePicker
                  label="Start Date"
                  value={exp.startDate}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "experience",
                      "startDate",
                      e.target.value
                    )
                  }
                />
                <DatePicker
                  label="End Date"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "experience",
                      "endDate",
                      e.target.value
                    )
                  }
                />
                <InputField
                  label="Location"
                  className="sm:col-span-2"
                  value={exp.location}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "experience",
                      "location",
                      e.target.value
                    )
                  }
                />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Responsibilities
                  </label>
                  <textarea
                    value={(exp.responsibilities || []).join("\n")}
                    onChange={(e) =>
                      updateNestedField(
                        index,
                        "experience",
                        "responsibilities",
                        e.target.value.split("\n")
                      )
                    }
                    rows="4"
                    className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="One responsibility per line"
                  ></textarea>
                </div>
              </div>
              <button
                onClick={() => removeListItem(index, "experience")}
                className="mt-2 text-red-500 hover:text-red-700 flex items-center text-sm"
              >
                <Trash2 size={16} className="mr-1" /> Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addListItem("experience")}
            className="mt-2 text-blue-500 hover:text-blue-700 flex items-center"
          >
            <Plus size={18} className="mr-1" /> Add Experience
          </button>
        </EditorSection>

        <EditorSection
          title="Education"
          isVisible={sections.education}
          onToggle={() => toggleSectionVisibility("education")}
        >
          {(resumeData.education || []).map((edu, index) => (
            <div
              key={edu.id}
              className="p-4 border rounded-md mb-4 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Degree / Certificate"
                  value={edu.degree}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "education",
                      "degree",
                      e.target.value
                    )
                  }
                />
                <InputField
                  label="School / Institution"
                  value={edu.school}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "education",
                      "school",
                      e.target.value
                    )
                  }
                />
                <DatePicker
                  label="Graduation Date"
                  value={edu.graduationDate}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "education",
                      "graduationDate",
                      e.target.value
                    )
                  }
                />
                <InputField
                  label="Location"
                  value={edu.location}
                  onChange={(e) =>
                    updateNestedField(
                      index,
                      "education",
                      "location",
                      e.target.value
                    )
                  }
                />
              </div>
              <button
                onClick={() => removeListItem(index, "education")}
                className="mt-2 text-red-500 hover:text-red-700 flex items-center text-sm"
              >
                <Trash2 size={16} className="mr-1" /> Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addListItem("education")}
            className="mt-2 text-blue-500 hover:text-blue-700 flex items-center"
          >
            <Plus size={18} className="mr-1" /> Add Education
          </button>
        </EditorSection>

        <EditorSection
          title="Skills"
          isVisible={sections.skills}
          onToggle={() => toggleSectionVisibility("skills")}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {(resumeData.skills || []).map((skill, index) => (
              <div key={index} className="flex items-center">
                <input
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...(resumeData.skills || [])];
                    newSkills[index] = e.target.value;
                    setResumeData((p) => ({ ...p, skills: newSkills }));
                  }}
                  className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  onClick={() => removeListItem(index, "skills")}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => addListItem("skills")}
            className="mt-4 text-blue-500 hover:text-blue-700 flex items-center"
          >
            <Plus size={18} className="mr-1" /> Add Skill
          </button>
        </EditorSection>

        {(resumeData.customSections || []).map((section, index) => (
          <EditorSection
            key={section.id}
            title={
              <InputField
                bare
                value={section.title}
                onChange={(e) =>
                  updateNestedField(
                    index,
                    "customSections",
                    "title",
                    e.target.value
                  )
                }
              />
            }
            isCustom
            onRemove={() => removeListItem(index, "customSections")}
          >
            <textarea
              value={(section.details || []).join("\n")}
              onChange={(e) =>
                updateNestedField(
                  index,
                  "customSections",
                  "details",
                  e.target.value.split("\n")
                )
              }
              rows="5"
              className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter details, one per line"
            ></textarea>
          </EditorSection>
        ))}
        <button
          onClick={() => addListItem("customSections")}
          className="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 py-4 rounded-lg flex justify-center items-center"
        >
          <Plus size={20} className="mr-2" /> Add Custom Section
        </button>
      </div>
    </div>
  );
};

const EditorSection = ({
  title,
  children,
  isVisible,
  onToggle,
  isCustom = false,
  onRemove,
}) => (
  <div
    className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-opacity ${
      isVisible === false ? "opacity-50" : ""
    }`}
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold flex items-center dark:text-white">
        {!isCustom && <Edit3 className="mr-3 text-blue-500" />}
        {title}
      </h2>
      <div className="flex items-center gap-4">
        {isCustom && (
          <button
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 flex items-center text-sm"
          >
            <Trash2 size={16} className="mr-1" /> Remove Section
          </button>
        )}
        {onToggle && (
          <button
            onClick={onToggle}
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            {isVisible ? (
              <Eye size={18} className="mr-1" />
            ) : (
              <EyeOff size={18} className="mr-1" />
            )}
            {isVisible ? "Visible" : "Hidden"}
          </button>
        )}
      </div>
    </div>
    {children}
  </div>
);

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  className = "",
  bare = false,
}) => {
  const inputClasses =
    "w-full p-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white";
  if (bare) {
    return (
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        className="text-xl font-bold bg-transparent border-none focus:ring-0 p-0 m-0 w-full dark:text-white"
        placeholder="Section Title"
      />
    );
  }
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value || ""}
        onChange={onChange}
        className={inputClasses}
      />
    </div>
  );
};

export default Editor;
