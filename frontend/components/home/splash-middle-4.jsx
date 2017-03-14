import React from 'react';

export const SplashMiddle4 = () => {
  let img4URL = "https://www.pivotaltracker.com/marketing_assets/";
  img4URL += "ms_illustration_3-5848a56f21cc07d3750fbf8c634b9a338e0254";
  img4URL += "dcf1ef50f13b78c19b2a7bc655.svg";

  return (
    <section className="text-block">
      <div className="page-container">
        <div className="info">
          <div className="info-text">
            <h3>Team transparency at a glance</h3>
            <p>
              No more surprises: With a shared, clear view of your
              team's work, everyone has a real-time, single source
              of truth. A quick scan explains your team's status,
              who's responsible for what, and what's coming next.
            </p>
          </div>
          <img className="info-img" src={img4URL} />
        </div>
      </div>
    </section>
  );
};
