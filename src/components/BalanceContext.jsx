
import React, { createContext, useContext, useState } from "react";


const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);

  const roundTo4 = (num) => {
    return parseFloat(num.toFixed(4));
  };

  // Increase balance
  const addBalance = (amount) => {
    setBalance((prev) => roundTo4(prev + amount));
  };

  // Decrease balance
  const subtractBalance = (amount) => {
    setBalance((prev) => roundTo4(prev - amount));
  };

  // Reset balance
  const resetBalance = () => {
    setBalance(0);
  };

  return (
    <BalanceContext.Provider value={{ balance, setBalance: (val) => setBalance(roundTo4(val)), addBalance, subtractBalance, resetBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};


export const useBalance = () => {
  return useContext(BalanceContext);
};
