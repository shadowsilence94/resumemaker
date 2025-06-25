import React, { useState, useEffect } from "react";
import { isCurrentDate } from "../../utils/dateUtils";

const DatePicker = ({ label, value, onChange, className = "" }) => {
  const isPresent = isCurrentDate(value);

  // Derive initial year and month from the 'value' prop
  const initialYear = isPresent || !value ? "" : value.split("-")[0];
  const initialMonth = isPresent || !value ? "" : value.split("-")[1];

  // Use local state to manage dropdown selections independently
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);

  // This effect listens for changes in the main 'value' prop (e.g., when 'Present' is toggled)
  // and resets the local state accordingly. This is the key to re-enabling the dropdowns.
  useEffect(() => {
    if (isCurrentDate(value) || !value) {
      setYear("");
      setMonth("");
    } else {
      const [newYear, newMonth] = value.split("-");
      setYear(newYear);
      setMonth(newMonth);
    }
  }, [value]);

  // This effect calls the main 'onChange' handler ONLY when both a month and a year have been selected.
  useEffect(() => {
    if (year && month) {
      onChange({ target: { value: `${year}-${month}` } });
    }
  }, [year, month]);

  const handlePresentToggle = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // When checking 'Present', clear local state and update parent
      setYear("");
      setMonth("");
      onChange({ target: { value: "Present" } });
    } else {
      // When un-checking, just clear the parent value. The useEffect above will handle clearing local state.
      onChange({ target: { value: "" } });
    }
  };

  // Generate options for Month and Year dropdowns
  const months = Array.from({ length: 12 }, (_, i) => {
    const monthLabel = new Date(0, i).toLocaleString("en-US", {
      month: "long",
    });
    const monthValue = String(i + 1).padStart(2, "0");
    return { value: monthValue, label: monthLabel };
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 70 }, (_, i) => String(currentYear - i));

  const selectClasses =
    "w-full p-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-200 dark:disabled:bg-gray-800";

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>

      <div className="flex gap-2">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          disabled={isPresent}
          className={selectClasses}
        >
          <option value="">Month</option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          disabled={isPresent}
          className={selectClasses}
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {(label.toLowerCase().includes("end") ||
        label.toLowerCase().includes("graduation")) && (
        <div className="mt-2 flex items-center">
          <input
            type="checkbox"
            id={`present-checkbox-${label}`}
            checked={isPresent}
            onChange={handlePresentToggle}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label
            htmlFor={`present-checkbox-${label}`}
            className="ml-2 block text-sm text-gray-900 dark:text-gray-300 cursor-pointer"
          >
            Present
          </label>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
