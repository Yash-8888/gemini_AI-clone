import { createContext } from "react";
import { runChat } from "../config/gemini.js";



export const context = createContext();



const ContextProvider = ({ children }) => {
  



  const onSent = async (prompt) => {
    try {
      const reply = await runChat(prompt);
      console.log("Gemini replied:", reply);
      return reply;
    } catch (error) {
      console.error("Error in onSent:", error);
      return "Something went wrong!";
    }

    
    
  };
 

  

  return (
    <context.Provider value={{ onSent }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
