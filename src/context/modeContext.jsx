import React, { createContext, useContext, useState } from "react";

const ModeDataContext = createContext();

export const ModeDataProvider = ({ children }) => {
  const [modeData, setModeData] = useState("light");

  return (
    <ModeDataContext.Provider value={{ modeData, setModeData }}>
      {children}
    </ModeDataContext.Provider>
  );
};

export const useModeData = () => {
  const context = useContext(ModeDataContext);
  if (!context) {
    throw new Error("useModeData must be used within a ModeDataProvider");
  }
  return context;
};
