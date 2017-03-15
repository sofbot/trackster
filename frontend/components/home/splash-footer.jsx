import React from 'react';
import { Link } from 'react-router';

export const SplashFooter = () => {
  return (
    <footer>
      <h1>trackster</h1>
      <div className="footer-links">
        <div className="footer-left">
          <a href="http://www.sofiachen.com"
            target="_blank">About Me</a>
          <a href="mailto:me@sofiachen.com">Contact Me</a>
        </div>
        <div className="footer-center">
          <a href="https://github.com/sofbot/"
            target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/sofia-chen/"
            target="_blank">Linkedin</a>
        </div>
        <div className="footer-right">
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </footer>
  );
};
