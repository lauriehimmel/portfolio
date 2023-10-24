import "./About-body.css";
export default function AboutBody({builtWith}) {
  return (
    <div>
        <p className="about-body">
          I'm a software engineer with a collaborative spirit and an eye for
          design. I bring expertise in project management, problem-solving, and a careful consideration of the user's needs, having spent years in the eCommerce arena doing just that. My experience allows me to be a versatile developer, an efficient communicator, and a compassionate coworker. 
        </p>
        <div className="about-logos">
          <img className="about-logo" src={builtWith.react}/>
          <img className="about-logo" src={builtWith.js}/>
          <img className="about-logo" src={builtWith.nodejs}/>
          <img className="about-logo" src={builtWith.mongodb}/>
          <img className="about-logo" src={builtWith.html}/>
          <img className="about-logo" src={builtWith.css}/>
        </div>
    </div>
  );
}
