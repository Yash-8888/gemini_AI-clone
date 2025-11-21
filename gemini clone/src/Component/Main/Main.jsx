import { runChat } from "../../config/gemini";
import { useState } from "react";
import { assets } from "../../assets/assets";

import "./Main.css";

const Main = () => {

  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = async () => {
    if (!prompt.trim()) return;

    try {
      const response = await runChat(prompt);
      setReply(response);
      setPrompt(""); // Clear input after sending
      console.log("AI Reply:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <div className="Main">
      <div className="Nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="Main-Container">
        <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} />
            </div>
            <div className="card">
              <p>Tell me about React js and React native</p>
              <img src={assets.code_icon} />
            </div>
        </div>
        <div className="Main-bottem">
          <div className="search-box">
            <input value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} type="text" placeholder="Enter a prompt here"/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} onClick={handleSend} alt="" />
            </div>
          </div>
          <p className="bottem-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
        
      </div>
    </div>
  );
};

export default Main;
