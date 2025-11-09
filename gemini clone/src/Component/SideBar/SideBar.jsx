import { useState } from "react";
import { assets } from "../../assets/assets";
import "./SideBar.css";
const SideBar = () => {

  const [extended, setextended] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img onClick={()=> setextended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />

          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>

          {extended?<div className="recent">
            <p className="Recent-titel">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              {extended ? <p>What is react ...</p> : null}
            </div>
          </div> : null}
        </div>

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
