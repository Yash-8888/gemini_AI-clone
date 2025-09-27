import React from 'react'
import {assets} from '../../assets/assets'

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className=" ">
            <img src={assets.menu_icon} alt="Menu Icon"  />
            <div className="flex mt-4 gap-1">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="">
                <p className='size-20'>Recent</p>
                <div className="flex items-center gap-1">
                    <img src={assets.message_icon} alt="Chat Icon" />
                    <p>What is react  ...</p>
                </div>
            </div>
        </div>
        <div className=""> 
            <div className="px-[10px] flex items-center gap-1">
                <img src={assets.question_icon} alt="Light Mode Icon" />
                <p>Help</p>
            </div>
            <div className="px-[10px] flex items-center gap-1">
                <img src={assets.history_icon} alt="Light Mode Icon" />
                <p>Activity</p>
            </div>
            <div className="px-[10px] flex items-center gap-1">
                <img src={assets.setting_icon} alt="Light Mode Icon" />
                <p>settings</p>
            </div>

        </div>
    </div>
  )
}

export default SideBar
