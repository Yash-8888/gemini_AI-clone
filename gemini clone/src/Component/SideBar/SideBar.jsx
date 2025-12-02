import { useState } from "react";
import { assets } from "../../assets/assets";
import "./SideBar.css";

const SideBar = ({ resPromts, onSelect }) => {

  const [extended, setExtended] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img
            onClick={() => setExtended(prev => !prev)}
            className="menu"
            src={assets.menu_icon}
            alt=""
          />

          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>

          {extended && (
            <div className="recent">
              <p className="Recent-titel">Recent</p>

              {Array.isArray(resPromts) && resPromts.length > 0 ? (
                resPromts.map((item, index) => (
                  <div 
                    key={index} 
                    className="recent-entry" 
                    onClick={() => onSelect(item.prompt)}
                  >
                    <img src={assets.message_icon} alt="" />
                    <p>
                      {item.prompt.length > 20 
                        ? item.prompt.slice(0, 20) + "..." 
                        : item.prompt}
                    </p>
                  </div>
                ))
              ) : (
                <p className="no-recent">No recent prompts</p>
              )}
            </div>
          )}
        </div>

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
