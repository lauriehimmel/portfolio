import FirstTab from './FirstTab'
import './Project-tabs.css'

export default function BuiltWith() {
  const frontEnd = {
    js: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/javascript_q2eei2.svg",
    react: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/react_xjpwjx.svg",
    html: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/html5_twl23h.svg",
    css: "https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/css3_pmnmok.svg"
  }

  return (
    <>
    <div className="all-logos">
      <p>|</p>
      <FirstTab frontEnd={frontEnd} />
      <img className="logos" src="https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/nodejs_ryhjri.svg"/>
      <img className="logos" src="https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/mongodb_olvjyh.svg"/>
      <img className="logos" src="https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/nodejs_ryhjri.svg"/>
      <p>|</p>
      <img className="logos" src="https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/heroku_etywh1.svg"/>
      <img className="logos" src="https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105259/netlify_rb2nzu.svg"/>
      <p>|</p>
      <img className="logos" src="https://res.cloudinary.com/dpsymdmyi/image/upload/v1698105260/openai_ntsyko.svg"/>
    </div>
    <div className="line"></div>
    </>
  )
}