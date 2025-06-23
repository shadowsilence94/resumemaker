/**
 * Storage service for resume data management
 */

const STORAGE_KEYS = {
  RESUME_DATA: "resumeData",
  SECTIONS: "resumeSections",
  THEME: "theme",
  SELECTED_TEMPLATE: "selectedTemplate",
};

/**
 * Storage service class
 */
class StorageService {
  /**
   * Save resume data to localStorage
   * @param {Object} data - Resume data to save
   */
  saveResumeData(data) {
    try {
      localStorage.setItem(STORAGE_KEYS.RESUME_DATA, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving resume data:", error);
    }
  }

  /**
   * Load resume data from localStorage
   * @returns {Object|null} - Resume data or null if not found
   */
  loadResumeData() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RESUME_DATA);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error loading resume data:", error);
      return null;
    }
  }

  /**
   * Save sections configuration
   * @param {Object} sections - Sections configuration
   */
  saveSections(sections) {
    try {
      localStorage.setItem(STORAGE_KEYS.SECTIONS, JSON.stringify(sections));
    } catch (error) {
      console.error("Error saving sections:", error);
    }
  }

  /**
   * Load sections configuration
   * @returns {Object|null} - Sections configuration or null
   */
  loadSections() {
    try {
      const sections = localStorage.getItem(STORAGE_KEYS.SECTIONS);
      return sections ? JSON.parse(sections) : null;
    } catch (error) {
      console.error("Error loading sections:", error);
      return null;
    }
  }

  /**
   * Save theme preference
   * @param {string} theme - Theme name
   */
  saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  }

  /**
   * Load theme preference
   * @returns {string|null} - Theme name or null
   */
  loadTheme() {
    try {
      return localStorage.getItem(STORAGE_KEYS.THEME);
    } catch (error) {
      console.error("Error loading theme:", error);
      return null;
    }
  }

  /**
   * Save selected template
   * @param {string} template - Template ID
   */
  saveSelectedTemplate(template) {
    try {
      localStorage.setItem(STORAGE_KEYS.SELECTED_TEMPLATE, template);
    } catch (error) {
      console.error("Error saving selected template:", error);
    }
  }

  /**
   * Load selected template
   * @returns {string|null} - Template ID or null
   */
  loadSelectedTemplate() {
    try {
      return localStorage.getItem(STORAGE_KEYS.SELECTED_TEMPLATE);
    } catch (error) {
      console.error("Error loading selected template:", error);
      return null;
    }
  }

  /**
   * Clear all resume data
   */
  clearAll() {
    try {
      Object.values(STORAGE_KEYS).forEach((key) => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }

  /**
   * Export all data as JSON
   * @returns {Object} - All stored data
   */
  exportData() {
    return {
      resumeData: this.loadResumeData(),
      sections: this.loadSections(),
      theme: this.loadTheme(),
      selectedTemplate: this.loadSelectedTemplate(),
    };
  }

  /**
   * Import data from JSON
   * @param {Object} data - Data to import
   */
  importData(data) {
    if (data.resumeData) this.saveResumeData(data.resumeData);
    if (data.sections) this.saveSections(data.sections);
    if (data.theme) this.saveTheme(data.theme);
    if (data.selectedTemplate) this.saveSelectedTemplate(data.selectedTemplate);
  }
}

// Export singleton instance
export const storageService = new StorageService();
export { STORAGE_KEYS };
