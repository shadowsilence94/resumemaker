import React from 'react';
import { Calendar } from 'lucide-react';
import { formatDateForInput } from '../../utils';

const DatePicker = ({ label, value, onChange, className = '' }) => {
    // Determine if the "Present" option is selected
    const isPresent = value === 'Present';
    
    // Format the date for the <input type="month">. If 'Present', the input is disabled, so we clear it.
    const inputValue = isPresent ? '' : formatDateForInput(value);
    
    const handleDateChange = (e) => {
        const inputDate = e.target.value; // Format: YYYY-MM
        if (!inputDate) {
            onChange({ target: { value: '' } });
            return;
        }
        const [year, month] = inputDate.split('-');
        const displayDate = `${month}/${year}`;
        onChange({ target: { value: displayDate } });
    };
    
    const handlePresentToggle = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            onChange({ target: { value: 'Present' } });
        } else {
            // When unchecked, clear the value. The user can then select a new date.
            onChange({ target: { value: '' } });
        }
    };
    
    return (
        <div className={className}>
            <label htmlFor={`date-input-${label}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
            </label>
            
            <div className="relative">
                <input
                    id={`date-input-${label}`}
                    type="month"
                    value={inputValue}
                    onChange={handleDateChange}
                    disabled={isPresent}
                    className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-200 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                />
                <Calendar 
                    size={16} 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" 
                />
            </div>
            
            {/* "Present" checkbox for end dates */}
            {(label.toLowerCase().includes('end') || label.toLowerCase().includes('graduation')) && (
                <div className="mt-2 flex items-center">
                    <input
                        type="checkbox"
                        id={`present-checkbox-${label}`}
                        checked={isPresent}
                        onChange={handlePresentToggle}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={`present-checkbox-${label}`} className="ml-2 block text-sm text-gray-900 dark:text-gray-300 cursor-pointer">
                        Present
                    </label>
                </div>
            )}
        </div>
    );
};

export default DatePicker;