import './test.css'
import cake from './cake.gif'
import logo from './Moonwix.svg'
import smoke from './cakesmoke.gif'
import { useState } from 'react'

export default function Moonwix () {
const [isLit, setIsLit] = useState(false)
  function blowOut () {
    isLit ? setIsLit(false) : setIsLit(true)
  }
    return (
        <div className="moonwix-bg">
          <img className="moonwix-logo" src={logo} />
          {isLit ? (
          <img className="moonwix-cake" src={cake} onClick={blowOut}/>
        ) : (<img className="moonwix-cake" src={smoke} onClick={blowOut}/>)}
        </div>
    )
}