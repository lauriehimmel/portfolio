import "./About-body.css";
export default function AboutBody({ builtWith }) {
  return (
    <div className="about-component">
      <div className="about-body">
      <p className="hi">Hi! I'm Laurie. </p>
      <p className="aboutbody-text">
        I'm a software engineer with a collaborative spirit and an eye for
        design. <br />I bring expertise in project management, problem-solving,
        and a careful consideration of the user's needs having spent years in
        the eCommerce space doing just that. <br />
        My experience allows me to be a versatile developer, an efficient
        communicator, and a compassionate coworker.
        </p>
      </div>
      <div className="about-logos">
        <div className="skills">
          <img className="about-logo" src={builtWith.react} />
          React
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.js} />
          JavaScript
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.nodejs} />
          Node.js
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.mongodb} />
          MongoDB
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.express} />
          Express
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.html} />
          HTML
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.css} />
          CSS
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.python} />
          Python
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.postgre} />
          SQL
        </div>
        <div className="skills">
          <img className="about-logo" src={builtWith.postman} />
          Postman
        </div>
      </div>
    </div>
  );
}
