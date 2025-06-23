/**
 * Format date string to YYYY-MM format for the <input type="month"> element.
 * This new version correctly handles the "MM/YYYY" format from the app's state.
 * @param {string} dateStr - Date string to format (e.g., "06/2025" or "2025-06")
 * @returns {string} Formatted date string in "YYYY-MM" format
 */
export const formatDateForInput = (dateStr) => {
  // Return empty if the date string is not valid
  if (!dateStr || typeof dateStr !== "string") return "";

  // If it's already in the correct YYYY-MM format, do nothing
  if (/^\d{4}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }

  // Check for the "MM/YYYY" format and convert it
  const mmYYYYMatch = dateStr.match(/^(\d{2})\/(\d{4})$/);
  if (mmYYYYMatch) {
    const month = mmYYYYMatch[1];
    const year = mmYYYYMatch[2];
    return `${year}-${month}`;
  }

  // For any other unexpected format, return an empty string to avoid errors
  return "";
};

/**
 * Format date for display (e.g., "Jan 2023")
 * @param {string} dateStr - Date string to format
 * @returns {string} Formatted display date
 */
export const formatDateForDisplay = (dateStr) => {
  if (!dateStr) return "";

  // To properly parse, we need a full date. Let's reformat to YYYY-MM-DD
  const formattedInput = formatDateForInput(dateStr); // "YYYY-MM"
  if (!formattedInput) return dateStr; // Return original if format is unknown

  const date = new Date(formattedInput + "-02"); // Use 2nd day to avoid timezone issues
  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

/**
 * Check if a date string represents "current" or "present"
 * @param {string} dateStr - Date string to check
 * @returns {boolean} True if date represents current/present
 */
export const isCurrentDate = (dateStr) => {
  if (!dateStr) return false;
  const lowerDate = dateStr.toLowerCase();
  return (
    lowerDate === "current" || lowerDate === "present" || lowerDate === "now"
  );
};
