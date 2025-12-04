import { runChat } from "../../config/gemini.js";
import { useState } from "react";
import { assets } from "../../assets/assets";

import "./Main.css";

const Main = ({ 
  prompt, 
  setPrompt, 
  resPromts, 
  setResPromts }) => {

  const [reply, setReply] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const handleSend = async () => {
    if (!prompt.trim()) return;

    // save prompt
    setUserPrompt(prompt);
    setResPromts(prev => [...prev, { prompt }]);

    setIsLoading(true);
    setDisplayedText("");

    try {
      const response = await runChat(prompt);
      setReply(response);

      const htmlText = response
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br/>");

      setIsLoading(false);

      let i = -1;
      const speed = 5;

      const interval = setInterval(() => {
        setDisplayedText(prev => prev + htmlText.charAt(i));
        i++;
        if (i >= htmlText.length) clearInterval(interval);
      }, speed);

      setPrompt("");
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="Main">
      <div className="Nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="Main-Container">
        {!reply && (
          <>
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
          </>
        )}

        <div className="Main-bottem">
          <div className="search-box">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} onClick={handleSend} alt="" />
            </div>
          </div>
          <p className="bottem-info">
            Gemini may display inaccurate info…
          </p>
        </div>

        {reply && (
          <div className="result">
            <div className="prompt-box">
              <img src={assets.user_icon} alt="" />
              <p>{userPrompt}</p>
            </div>

            {isLoading ? (
              <div className="loader-box">
                <img src={assets.gemini_icon} alt="" className="loader-icon" />
                <div className="loader-bars">
                  <div></div><div></div><div></div>
                </div>
              </div>
            ) : (
              <div className="result-box">
                <img src={assets.gemini_icon} alt="" />
                <p
                  className="formated-text"
                  dangerouslySetInnerHTML={{ __html: displayedText }}
                ></p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
