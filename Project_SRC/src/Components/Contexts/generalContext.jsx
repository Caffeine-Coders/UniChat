"use client";
import { useState, createContext } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [showChatGPT, setShowChatGPT] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        showChatGPT,
        setShowChatGPT,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
