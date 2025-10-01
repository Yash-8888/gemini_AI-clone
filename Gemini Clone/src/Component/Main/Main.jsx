import React, { use } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
      <div className="Main">
        <div className="nav">
          <p>Gemini</p>
          <img className='size-10 rounded-full ' src={assets.user_icon} alt="" /> 
        </div>
        <div className="Hero"> 
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p className="text-[#585858] text-[17px]  " >Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p className="text-[#585858] text-[17px] " >Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p className="text-[#585858] text-[17px] ">Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p className="text-[#585858] text-[17px] hover-bg-[#dfedae]">Tell me about React js and React native</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          <div className="bottem-sbar">
            <div className="search-box">
                <input className='p-[15px]' type="text" placeholder='Enter a prompt here'/>
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className=" text-[16px] ">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
          </div>
        </div>
      </div>

  )
}

export default Main
