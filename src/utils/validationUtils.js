/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if phone is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
};

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if URL is valid
 */
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate required fields in resume data
 * @param {Object} resumeData - Resume data to validate
 * @returns {Object} Validation result with errors
 */
export const validateResumeData = (resumeData) => {
  const errors = {};

  // Personal Info validation
  if (!resumeData.personalInfo?.firstName?.trim()) {
    errors.firstName = "First name is required";
  }

  if (!resumeData.personalInfo?.lastName?.trim()) {
    errors.lastName = "Last name is required";
  }

  if (
    resumeData.personalInfo?.email &&
    !isValidEmail(resumeData.personalInfo.email)
  ) {
    errors.email = "Please enter a valid email address";
  }

  if (
    resumeData.personalInfo?.phone &&
    !isValidPhone(resumeData.personalInfo.phone)
  ) {
    errors.phone = "Please enter a valid phone number";
  }

  if (
    resumeData.personalInfo?.website &&
    !isValidURL(resumeData.personalInfo.website)
  ) {
    errors.website = "Please enter a valid URL";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Clean and format text input
 * @param {string} text - Text to clean
 * @returns {string} Cleaned text
 */
export const cleanText = (text) => {
  if (!text) return "";
  return text.trim().replace(/\s+/g, " ");
};
