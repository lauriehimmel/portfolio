import "./Kindr-project.css";
import cloud from "../../../assets/Kindr-loading-animation.gif";
import cloud2 from "../../../assets/cloud-2.svg";
import cloud3 from "../../../assets/bg-cloud.svg";

export default function KindrProject() {
  return (
    <>
      <div className="kindr-page">
        <div className="kindr-page-title">Kindr</div>
        <img src={cloud2} className="cloud2" />
        <div className="kindr-card">
          <h1>Welcome to Kindr!</h1>
          <p>
            Kindr is a platform for Do-Gooders. You can create, share, and
            participate in meaningful acts of kindness. Whether you choose to
            complete deeds from fellow Kindr members or embark on the daily
            challenge, every day is an opportunity to make a positive impact.
          </p>
          <br/>
          <p>
            <a
              className="kindr-project-link"
              href="https://louispino.netlify.app/"
              target="blank"
            >
              Louis Pino&#160;
            </a>
            and I built Kindr, a MERN-stack, single-page app,  as part of a weeklong project at General Assembly. We integrated
            OpenAI’s API to develop an auto-generated "Daily Deed".
          </p>
        </div>
        <div className="kindr-card">
            <h1>Links</h1>
            <p><a className="kindr-link" href="https://github.com/LouisPino/Kindr/blob/main/frontend/src/App.css">Github</a> | <a className="kindr-link" href="https://itskindr.netlify.app/">Live Site</a></p>
        </div>
        <div className="kindr-card">
          <h1>Future Features</h1>
          <ul>
            <li>
              Design a "Deed Streak" feature when users complete deeds every day
            </li>
            <li>View Deeds by Category option</li>
            <li>Share to social media cards</li>
            <li>Ability to add other users as "friends"</li>
            <li>Make app 100% mobile-friendly</li>
            <li>Integrate Cloudinary's API for seamless media uploads</li>
          </ul>
        </div>
      </div>
    </>
  );
}
