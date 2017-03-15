import React from 'react';

export const SplashContact = () => {
  return (
    <div className="splash-contact">
      <div className="contact-txt">
        <h3>made with love in 2 weeks at a/A</h3>
      </div>
      <div className="contact-links">
        <div className="cl-left">
          <a href="http://www.sofiachen.com"
              target="_blank">About Me</a>
          <a href="mailto:me@sofiachen.com">Contact Me</a>
        </div>
        <div className="cl-right">
          <a href="https://github.com/sofbot"
              target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/sofia-chen/"
              target="_blank">Linkedin</a>
        </div>
      </div>
    </div>
  );
};
