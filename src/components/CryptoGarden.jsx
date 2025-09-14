
import CryptoTree from "./CryptoTree";
import {useEffect } from "react"
import { useCounter } from "./CounterContext";
import { useCrypto } from "./CryptoContext";


const CryptoGarden = () => {

    const {count} = useCounter();
    
    const {cryptos} = useCrypto();

    return (
        <div className="bg-[url(src\assets\FarmBackground.png')] w-full h-[calc(88%-5rem)] mt-4.5 grid grid-cols-4 grid-rows-4 gap-2 p-4 rounded-lg border-2 border-gray-200"
        style={{ backgroundImage: "url('../src/assets/FarmBackground.png')" }} 
        >
            {/* {
               Array.from({length: count}, (_, i) => (
                <CryptoTree/>
               ))
            } */}

            {
                cryptos.map((crypto, index) => (
                    <CryptoTree cryptourrency={crypto.crypto} key={index}/>
                ))
            }
        </div>


    )
}

export default CryptoGarden
