import React from 'react';

export const SplashMiddle3 = () => {
  let img3URL = "https://www.pivotaltracker.com/marketing_assets/";
  img3URL += "ms_illustration_2-ade3ab717ac536d23a875a27839ff3df9e7d8";
  img3URL += "4c5c2fbb371adfcaf9bf829659d.svg";

  return (
    <section className="text-block">
      <div className="page-container">
        <div className="info">
          <div className="info-text">
            <h3>Tools to help you adapt and evolve</h3>
            <p>
              Get more work done, more often:
              Trackster's story planning helps
              you break down and prioritize projects into
              manageable chunks so the team can keep the
              momentum toward delivering.
            </p>
          </div>
          <img className="info-img" src={img3URL} />
        </div>
      </div>
    </section>
  );
};
