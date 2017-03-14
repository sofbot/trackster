import React from 'react';
import { Link } from 'react-router';

export const SplashMain = () => {
  return (
    <div className="splash-main">
      <h1 className="splash-heading">
        Changing how teams build software
      </h1>
      <div className="splash-tour">
        <Link to="/signup">Take a tour
          <span className="splash-tour-btn"></span>
        </Link>
      </div>

    </div>
  );
};
