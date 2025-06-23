import { useResumeContext } from "../../context/ResumeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useResumeContext();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span
        className={`theme-toggle-slider ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <FaSun className="w-3 h-3 text-yellow-500" />
        ) : (
          <FaMoon className="w-3 h-3 text-blue-500" />
        )}
      </span>
      <span className="sr-only">
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
