import { useState } from "react";

export const BalancePopupModal = ({ onCancel, onConfirm }) => {
    const [volume, setVolume] = useState(0);
    //const { increment } = useCounter();
    const [balance, setBalance] = useState(Number(localStorage.getItem("balanceID")) || 0);

    const handleCancelClick = () => {
        if (onCancel) onCancel();
    };

    const handleConfirmClick = () => {
        const newBalance = balance + Number(volume);
        setBalance(newBalance);
        localStorage.setItem("balanceID", newBalance);

        //increment();

        if (onConfirm) onConfirm();
    };

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999]">
            <div className="bg-white p-5 rounded-lg shadow-lg w-[450px]">
                <h2 className="text-lg font-semibold mb-4"> Balance </h2>

                <div className="mb-4">
                    <div className="w-full border-2 border-gray-300 p-3 rounded-lg font-semibold">
                        <span className="text-gray-700">Balance (USD):</span> {balance} USD
                    </div>
                </div>

                <div className="flex justify-end items-end gap-2">
                    <button 
                        type="button"
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </button>

                    <div className="flex flex-col">
                        <label htmlFor="qty" className="text-gray-700">Amount (USD):</label>
                        <input 
                            type="number" 
                            id="qty" 
                            className="border border-green-300 p-2 rounded-md" 
                            value={volume}  
                            onChange={(e) => setVolume(e.target.value)}
                        />
                    </div>

                    <button 
                        type="button"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                        onClick={handleConfirmClick}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};
