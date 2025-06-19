import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Resume Builder</h1>
      <p>Create a professional resume in minutes.</p>
      <Link to="/editor" className="get-started-btn">
        Get Started
      </Link>
    </div>
  );
};

export default Home;