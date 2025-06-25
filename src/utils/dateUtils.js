/**
 * Formats a date string from "YYYY-MM" to "Month Year" for display.
 * e.g., "2025-06" becomes "Jun 2025"
 * @param {string} dateStr - The date string in "YYYY-MM" format.
 * @returns {string} The formatted date string.
 */
export const formatToMonthYear = (dateStr) => {
  if (!dateStr || isCurrentDate(dateStr)) return dateStr;

  // Add a day to prevent timezone issues, e.g., "2025-06" becomes "2025-06-02"
  const date = new Date(dateStr + "-02");
  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

/**
 * Checks if a date string represents a "Present" date.
 * @param {string} dateStr - The date string to check.
 * @returns {boolean} True if the date is "Present" or "Current".
 */
export const isCurrentDate = (dateStr) => {
  if (!dateStr) return false;
  const lowerDate = dateStr.toLowerCase();
  return lowerDate === "current" || lowerDate === "present";
};
