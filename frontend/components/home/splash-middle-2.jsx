import React from 'react';

export const SplashMiddle2 = () => {
  let img2URL = "https://www.pivotaltracker.com/marketing_assets/";
  img2URL += "ms_illustration_1-21badd597e43f09bc278f454fed48074837db1";
  img2URL += "f94b9bb5b8e502e42e0032b347.svg";

  return (
    <section className="text-block">
      <div className="page-container">
        <div className="info">
          <div className="info-text">
            <h3>Better organization to get focused</h3>
            <p>
              Keep your team on the rails:
              Trackster's shared backlog makes priorities
              clear so the team can stay organized.
              Easily visualize scope, focus your teamwork,
              and stay nimble when circumstances change.
            </p>
          </div>
          <img className="info-img" src={img2URL} />
        </div>
      </div>
    </section>
  );
};
