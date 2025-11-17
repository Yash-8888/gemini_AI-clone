import { createContext } from "react";
import { runChat } from "../config/gemini";



export const context = createContext();

const ContextProvider = ({ children }) => {

  // This function runs when user sends a prompt
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
  onSent("print hello world in js");
  

  return (
    <context.Provider value={{ onSent }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
