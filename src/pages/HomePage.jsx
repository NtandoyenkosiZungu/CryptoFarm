import { CryptoItemContainer } from "../components/CryptoItemContainer";
import  CryptoGarden  from "../components/CryptoGarden";
import TradingViewChart  from "../services/TradingViewChart"
import { useState, useEffect } from "react";
import { useBalance } from "../components/BalanceContext";


function loadObjectById(id) {
    const item = localStorage.getItem("user_" + id);
    return item ? JSON.parse(item) : null;
  }
  
const HomePage = () => {
    const {setBalance} = useBalance();

    const [cryptoId, setCryptoID] = useState('BTC');

    useEffect(()=> {
      if(localStorage.getItem('balance')){
        setBalance(Number(localStorage.getItem('balance')))
      }else {
        localStorage.setItem('balance', 500)
        setBalance(500);
      }
    }, [])

    useEffect(() => {
        const handleCryptoSaved = () => {
          const storedItem = loadObjectById(cryptoId);
          if (storedItem) setCryptoID(storedItem.data.symbol);
        };
      
        window.addEventListener("cryptoSaved", handleCryptoSaved);
        return () => window.removeEventListener("cryptoSaved", handleCryptoSaved);
      }, [cryptoId]);
      
    useEffect(() => {
        const handleStorage = (event) => {
          if (event.key && event.key.startsWith("user_")) {
            const storedItem = loadObjectById(cryptoId);
            if (storedItem) {
              setCryptoID(storedItem.data.symbol);
            }
          }
        };
    
        window.addEventListener("storage", handleStorage);
    
        // cleanup listener on unmount
        return () => window.removeEventListener("storage", handleStorage);
      }, [cryptoId]); 
    return (
        <div className="w-1/1 grid grid-rows-2 gap-5 pl-5 pr-5 mt-[4rem]  lg:grid-cols-2 lg:fixed" >
            <div className="w-full h-[calc(88%-4rem)] grid grid-rows-2 gap-1">
                <div className="w-1/1 h-9/10 bg-white relative rounded-xl m-auto">
                    <TradingViewChart symbol={cryptoId}/>
                </div>
                <CryptoItemContainer />
            </div>
            <CryptoGarden />
        </div>
    );
};


export default HomePage;