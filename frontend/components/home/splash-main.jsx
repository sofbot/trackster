import React from 'react';
import { Link } from 'react-router';

export const SplashMain = () => {
  return (
    <div className="splash-main">
      <h1 className="splash-heading">
        Changing how teams build software
      </h1>
      <div className="demo">
        <Link to="#">Take a tour
          <span></span>
        </Link>
      </div>

    </div>
  );
};
