import React from 'react';
import { Link } from 'react-router-dom';
import './css/HomePage.css';

const HomePage = () => {
  return (
    <main className="home-page">
      <div className="home-page-content">
        <h1 className="introduction">Hi</h1>
        <h3>Welcome to my website. Here you can browse my <Link to="/apps">apps</Link> and <Link to="/open-source">open source projects</Link>, read my <Link to="/blog">blog</Link> and take a look at my <Link to="/cv">CV</Link>.</h3>
      </div>
    </main>
  );
};
export default HomePage;