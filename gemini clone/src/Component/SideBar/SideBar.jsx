import React from 'react'
import {assets} from '../../assets/assets'
import './SideBar.css'
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img src={assets.menu_icon} alt="" />

          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            <p>New Chat</p>
          </div>

          <div className="recent">
            <p className="Recent-titel">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>

        </div>

        

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            <p>help</p>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            <p>actvity</p>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            <p>settings</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
