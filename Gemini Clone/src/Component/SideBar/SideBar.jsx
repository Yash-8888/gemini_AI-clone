import React from 'react'
import {assets} from '../../assets/assets'

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="gap-13 flex flex-col">
            <div className="meun">
                <img src={assets.menu_icon} alt=""  />
            </div>
            <div className="gap-8  flex flex-col">
                <div className="p-[10px] justify-center h-[3rem] text-[14px] text-gray-500 font-bold rounded-full bg-gray-200 gap-[10px] mt-[10px] rounded items-center flex mt-4 gap-1 cursor-pointer ">
                <img className='p-10' src={assets.plus_icon} alt="" />
                <p className="">New Chat</p>
            </div>
            <div className="gap-10 flex flex-col items-start">
                <p className='text-[15px] font-semibold'>Recent</p>
                <div className="text-gray-500 text-[10px] flex items-center items-center cursor-pointer text-[14px]">
                    <img className='text-[10pxs] ' src={assets.message_icon} alt="Chat Icon" />
                    <p>What is react  ...</p>
                </div>
            </div>
            </div>
        </div>
        <div className="h-27 flex flex-col gap-5 text-gray-800 text-[16px] place-self-center"> 
            <div className="flex gap-3 text-[16px] hover:bg-gray-300 rounded-lg ">
                <img src={assets.question_icon} alt="Light Mode Icon" />
                <p>Help</p>
            </div>
            <div className="flex gap-3 hover:bg-gray-300 rounded-lg ">
                <img src={assets.history_icon} alt="Light Mode Icon" />
                <p>Activity</p>
            </div>
            <div className="flex gap-3 hover:bg-gray-300 rounded-lg ">
                <img src={assets.setting_icon} alt="Light Mode Icon" />
                <p>settings</p>
            </div>

        </div>
    </div>
  )
}

export default SideBar
