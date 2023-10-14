import "./About-body.css";
import Laurie from "../../assets/Laurie.svg";
export default function AboutBody() {
  return (
    <div>
      <p className="about-body">
        Well, hi! Thanks for coming to my little corner of the internet. I'm a
        software engineer with a collaborative spirit and an eye for design. I
        view each new opportunity as an adventure - how can I learn from this
        and use it in whatever I do moving forward? To that end, I come with a
        diverse set of experiences.
      </p>
      <p className="about-body">
        I've taught theatre at summer camps, comic book writing to 7 year olds,
        and spent two years as a ski bum. I've got a one-eyed dog named Roux (she's the inspiration behind <a href="https://winkfriends.netlify.app/" target="_blank">this project</a>), and though I lived in France for six months, I still can't manage to teach her French. I'm no quitter, though, so check back for progress.
      </p>
      <p className="about-body">
        My previous professional experience has made me a clear and efficient communicator, a collaborative and compassionate coworker, a quick learner and an eager student.
      </p>
      <img src={Laurie} />
      <p className="about-body">
      This website is a work in progress (as am I), but one thing that won't change? I want to connect with you! How can we work together?
      </p>
    </div>
  );
}