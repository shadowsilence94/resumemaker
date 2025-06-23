import React from "react";
import { Link } from "react-router-dom";

const FloatingButton = ({ to, icon, text }) => {
  return (
    <Link to={to} className="floating-btn group">
      <div className="flex items-center md:space-x-2">
        <span className="transition-transform duration-200 group-hover:scale-110">
          {icon}
        </span>
        {/* This span is now hidden on small screens and appears on medium screens and up */}
        <span className="hidden md:inline font-medium">{text}</span>
      </div>
      <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};

export default FloatingButton;
