
import React, { createContext, useContext, useState } from "react";


const CryptoContext = createContext();


export const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);


  const addCrypto = (id, crypto, initialValue) => {
    setCryptos((prev) => [...prev, { id, crypto, initialValue }]);
  };

  const removeCrypto = (id) => {
    setCryptos((prev) => prev.filter((item) => item.id !== id));
  };


  const updateCrypto = (id, newData) => {
    setCryptos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  };

  return (
    <CryptoContext.Provider value={{ cryptos, addCrypto, removeCrypto, updateCrypto }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => {
  return useContext(CryptoContext);
};
