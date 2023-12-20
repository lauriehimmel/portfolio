import React from "react"

export default function AboutSkills ({builtWith}) {
  return (
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
  )
}