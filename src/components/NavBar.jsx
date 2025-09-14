import logo from '../assets/logo.png';
import { useState } from 'react';
import { BalancePopupModal } from './BalancePopupModal';

export const NavBar = () => {
    const [showModal, setShowModal] = useState(false);
    const [balance, setBalance] = useState(localStorage.getItem("balanceID") || 100);

    const handlePlantClick = () => {
        const newBalance = localStorage.getItem("balanceID");
        setBalance(newBalance);
        setShowModal(false); // close after confirm
    };

    return (
        <>
            <div className="bg-white w-[98%] h-16 grid grid-cols-2 items-center px-4 rounded-lg border-2 border-gray-200 ">
                {/* Left: Logo + Name */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="logo" className="size-11" />
                    <div className="text-black text-lg font-mono">CryptoFarm</div>
                </div>

                {/* Right: Balance + Sign in + Avatar */}
                <div className="flex items-center justify-end space-x-4">
                    <div>
                        <div>
                            <button 
                                type="button"
                                className="h-10 w-20 flex items-center justify-center rounded-lg border-2 border-green-200 font-semibold"
                                onClick={() => setShowModal(true)}   // ✅ open popup
                            >
                                {'$' + balance}
                            </button>
                        </div>
                    </div>
                    <div className="h-10 w-20 flex items-center justify-center rounded-lg border-2 border-gray-200">
                        Sign in
                    </div>
                    <div>
                        <img 
                            src="https://cdn.vectorstock.com/i/1000v/29/52/faceless-male-avatar-in-hoodie-vector-56412952.avif" 
                            alt="avatar" 
                            className="h-14 w-15 rounded-full" 
                        />
                    </div>
                </div>
                {showModal && (
                    <BalancePopupModal 
                        onCancel={() => setShowModal(false)} 
                        onConfirm={handlePlantClick} 
                        />
                    )}
            </div>

            {/* ✅ Modal actually mounts when showModal = true */}
            
        </>
    );
};
