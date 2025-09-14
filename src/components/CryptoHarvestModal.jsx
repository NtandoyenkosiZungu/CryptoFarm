
import { useState } from "react";
import { useCounter } from "./CounterContext";


const CryptoHarvestModal = ({onCancel, onConfirm, profit}) => {

    const [harvest, setHarvest] = useState();
    const {decrement} = useCounter();

    const handleCancelClick = () => {
        if (onCancel) {
            onCancel();
        }
    };

    const handleConfirmClick = () => {
        if (onConfirm) {
            decrement();
            onConfirm();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Harvest Crypto</h2>
                <div className="mb-4 flex flex-col gap-4">
                    <div className="w-[400px] h-15 border-2 border-gray-300 p-3 rounded-lg font-semibold">
                        <span className="text-gray-700">Amount (USD):</span> <span className="text-green-500">{harvest} USD</span>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2 cursor-pointer hover:bg-red-900 hover:translate-y-[-3px] active:translate-0 active:scale-95 transition-all" 
                        onClick={() => handleCancelClick()}
                    >
                        Cancel 
                    </button>
                    <button 
                        className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 hover:translate-y-[-3px] active:translate-0 active:scale-95 transition-all" 
                        onClick={() => handleConfirmClick()}
                    >
                        Confirm
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default CryptoHarvestModal;