import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState({ status: false });
  const value = { loading, setLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("Debes de usar el loading provider");
  }
  return context;
};

export { LoadingProvider, useLoading };
