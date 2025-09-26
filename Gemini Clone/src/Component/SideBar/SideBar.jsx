import React from 'react'
import {assets} from '../../assets/assets'

const SideBar = () => {
  return (
    <div className="justify-between bg-[#202123] text-white flex flex-col h-full p-2">
        <div className="top">
            <img src={assets.menu_icon} alt="Menu Icon" className='logo' />
            <div className="new-chats">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p>Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="Chat Icon" />
                    <p>What is react  ...</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item">
                <img src={assets.question_icon} alt="Light Mode Icon" />
                <p>Help</p>
            </div>
            <div className="bottom-item">
                <img src={assets.history_icon} alt="Light Mode Icon" />
                <p>Activity</p>
            </div>
            <div className="bottom-item">
                <img src={assets.setting_icon} alt="Light Mode Icon" />
                <p>settings</p>
            </div>

        </div>
    </div>
  )
}

export default SideBar
