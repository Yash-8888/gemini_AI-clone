import { createContext } from "react";
import { runChat } from "../config/gemini";



export const context = createContext();

const [input, setInput] = useState("");

const ContextProvider = ({ children }) => {

  // This function runs when user sends a prompt
  const onSent = async (prompt) => {
    try {
      const reply = await runChat(input);
      console.log("Gemini replied:", reply);
      return reply;
    } catch (error) {
      console.error("Error in onSent:", error);
      return "Something went wrong!";
    }

    
    
  };
  const contextValue = { 
      onSent,
      input,
      setInput
  }

  

  return (
    <context.Provider value={{ contextValue }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
