import React from 'react';
import { Link } from 'react-router';
import SplashMainContainer from './splash-main-container';
import { SplashContact } from './splash-contact';
import { SplashMiddle1 } from './splash-middle-1';
import { SplashMiddle2 } from './splash-middle-2';
import { SplashMiddle3 } from './splash-middle-3';
import { SplashMiddle4 } from './splash-middle-4';
import { SplashMiddle5 } from './splash-middle-5';
import { SplashFooter } from './splash-footer';

const Splash = ({ login }) => {
  let imgURL = "https://www.pivotaltracker.com/marketing_assets/";
  imgURL += "hero-home@2x-1aa4ddbec91020439f9d29389d18d36206e0509d3e67f";
  imgURL += "05bd0ebf820db355ffd.png";

  return (
    <div className="main">
      <figure>
        <img src={imgURL} />
        <SplashMainContainer />
      </figure>
      <SplashContact />
      <div className="splash-middle">
        <SplashMiddle1 />
        <SplashMiddle2 />
        <SplashMiddle3 />
        <SplashMiddle4 />
        <SplashMiddle5 />
      </div>
      <SplashFooter />
    </div>
  );
};


export default Splash;
