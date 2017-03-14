import React from 'react';
import { Link } from 'react-router';

const Splash = ({ login, signup }) => {
  let imgURL = "https://www.pivotaltracker.com/marketing_assets/";
  imgURL += "hero-home@2x-1aa4ddbec91020439f9d29389d18d36206e0509d3e67f";
  imgURL += "05bd0ebf820db355ffd.png";

  let img2URL = "https://www.pivotaltracker.com/marketing_assets/";
  img2URL += "ms_illustration_1-21badd597e43f09bc278f454fed48074837db1";
  img2URL += "f94b9bb5b8e502e42e0032b347.svg";

  let img3URL = "https://www.pivotaltracker.com/marketing_assets/";
  img3URL += "ms_illustration_2-ade3ab717ac536d23a875a27839ff3df9e7d8";
  img3URL += "4c5c2fbb371adfcaf9bf829659d.svg";

  let img4URL = "https://www.pivotaltracker.com/marketing_assets/";
  img4URL += "ms_illustration_3-5848a56f21cc07d3750fbf8c634b9a338e0254";
  img4URL += "dcf1ef50f13b78c19b2a7bc655.svg";

  return (
    <div className="main">
      <figure>
        <img src={imgURL} />
      </figure>
      <div className="splash-main">
        <h1 className="splash-heading">
          Changing how teams build software
        </h1>
        <Link to="/signup">Try it free!</Link>
      </div>
      <div className="splash-middle">
        <section className="text-block text">
          <div className="page-container">
            <h2 className="text-block-primary">Project management for successful teams</h2>
            <h2 className="text-block-secondary">
              With a shared view of team priorities,
              a process that fosters collaboration,
              and dynamic tools to analyze progress,
              your team will deliver more frequently and consistently.
            </h2>
          </div>
        </section>
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
        <section className="text-block text">
          <div className="page-container">
            <h2 className="text-block-primary"> A better way to develop</h2>
            <h2 className="text-block-secondary">
              Succeeding in an evolving tech landscape requires a
              time-tested process and a tool your team can rely on.
              Trackster's modern workflow helps your team keep the
              pace and adapt when needs change.
            </h2>
          </div>
        </section>
      </div>
      <div className="splash-footer">
        <a href="mailto:me@sofiachen.com">Contact Me</a>
      </div>
    </div>
  );
};


export default Splash;
