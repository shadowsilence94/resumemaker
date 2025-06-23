import React from 'react';

import './ResumePageWrapper.css'; 

const ResumePageWrapper = ({ children }) => {
  return (
    <div id="resume-preview-area">
      {children}
    </div>
  );
};

export default ResumePageWrapper;