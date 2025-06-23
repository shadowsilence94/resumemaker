import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { ResumeProvider } from './context/ResumeProvider.jsx';
import ErrorBoundary from './components/ui/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);