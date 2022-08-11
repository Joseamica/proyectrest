import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, setState] = React.useState({ msg: "hola" });

  const value = { state, setState };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  // Solo podemos acceder al GlobalContext si estamos dentro del provider
  const context = useContext(GlobalContext); // Estamos accediento el GlobalContext con el hook useContext

  if (context === undefined) {
    throw new Error("Debes de usar el global provider");
  }
  return context;
};

export { GlobalProvider, useGlobal };
