import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, setState] = React.useState({
    amount: 1000,
    tip: 0,
    total: 0,
    payed: 730,
  });

  const toPay = state.amount - state.payed;

  const value = { state, setState, toPay };

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
  // console.log("%c State", "color: green;", context.state);
  return context;
};

export { GlobalProvider, useGlobal };
