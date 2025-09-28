import {useState} from 'react'
import {assets} from '../../assets/assets'

const SideBar = () => {

    const [expand, setExpand] = useState(false)

  return (
    <div className="sidebar">
        <div className="gap-13 flex flex-col">
            <div className="meun">
                <img onClick={() => setExpand(prev => !prev)} src={assets.menu_icon} alt=""  />
            </div>
            <div className="gap-8  flex flex-col">
                <div className="new ">
                <img className='mr-0' src={assets.plus_icon} alt="" />
                {expand ? <p>New Chat</p> : null}
            </div>
            {expand ?
            <div className="gap-10 flex flex-col items-start">
                <p className='text-[15px] font-semibold'>Recent</p>
                <div className="text-gray-500 text-[10px] flex items-center items-center cursor-pointer text-[14px]">
                    <img className='text-[10pxs] ' src={assets.message_icon} alt="Chat Icon" />
                    <p>What is react  ...</p>
                </div>
            </div>: null}
        </div>
        </div>
        <div className="h-27 flex flex-col gap-5 text-gray-800 text-[16px] place-self-center"> 
            <div className="flex gap-3 text-[16px] hover:bg-gray-300 rounded-lg ">
                <img src={assets.question_icon} alt="Light Mode Icon" />
                {expand ? <p>Help</p> : null}
            </div>
            <div className="flex gap-3 hover:bg-gray-300 rounded-lg ">
                <img src={assets.history_icon} alt="Light Mode Icon" />
                {expand ? <p>Activity</p> : null}
            </div>
            <div className="flex gap-3 hover:bg-gray-300 rounded-lg ">
                <img src={assets.setting_icon} alt="Light Mode Icon" />
                {expand ? <p>Setting</p> : null}
            </div>

        </div>
    </div>
  )
}

export default SideBar
