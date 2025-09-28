import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
    <div>
      <div className="Main">
        <div className="nav">
          <p>Gemini</p>
          <img className='size-10 rounded-full ' src={assets.user_icon} alt="" /> 
        </div>
      </div>
    </div>
  )
}

export default Main
