import { useState } from "react";
import { useCounter } from "./CounterContext";
import { useCrypto } from "./CryptoContext";


const CryptoPlantModal = ({onCancel, onPlant, id, inititialPrice}) => {

    const {addCrypto} = useCrypto();

    const [volume, setVolume] = useState(0)
    
    const {increment} = useCounter()

    const handleCancelClick = () => {
        if (onCancel) {
            onCancel();
        }
    };

    const handlePlantClick = () => {
        if (onPlant) {
            onPlant();
            increment()
            let initialPrice = Number(inititialPrice);
            addCrypto(id, id, volume * initialPrice);
        }
    };

    return (
        <div className="w-[50%] h-[500px] bg-white border-2 border-green-300 p-5 rounded-xl grid-rows-2 gap-6 fixed top-[15%] left-[25%] z-50 overflow-hidden">
            <div id="decscription"
                className="w-1/1 flex flex-col justify-between"
            >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Bitcoin (BTC)
                    </h1>
                    <button 
                        className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 cursor-pointer active:scale-95 transition-all"
                        onClick={() => handleCancelClick()}>
                        Close
                    </button>
                </div>
                <p>
                    Bitcoin is a digital currency (cryptocurrency) that runs on a decentralized network called the blockchain. Unlike traditional money issued by governments or banks, Bitcoin is not controlled by any single authority. Instead, transactions are verified by a global network of computers (miners) and recorded on a public ledger (the blockchain).
                </p>
            </div>
            <div id="plant-qty" className=" h-[300px] flex gap-4 items-end">
                <span className="flex flex-col">
                    <label htmlFor="qty" className="text-gray-700">{"Quantity:"}</label>
                    <input type="number" id="qty" className="border border-green-300 p-2 rounded-md" value={volume}  onChange={(e) => setVolume(e.target.value)}/>
                </span>
                <span>
                    <button 
                        className=" w-[200px] h-[40px] bg-green-500 text-white rounded-md hover:bg-green-600 hover:translate-y-[-4px] active:translate-y-0 active:scale-95 cursor-pointer  transition-all" 
                        onClick={() => handlePlantClick()}
                    >
                        Plant
                    </button>
                </span>
            </div>
        </div>
    )
}

export default CryptoPlantModal