import tree1 from '../assets/Bitcoin/btcTree10.png';
import { useState } from "react";
import CryptoHarvestModal from "./CryptoHarvestModal";

const CryptoTree = () => {
    
    
    const [showModal, setShowModal] = useState(false);

    const handleConfirmClick = () => {
        // Additional logic for confirming the harvest can be added here
        alert("Harvest Confirmed!");
        setShowModal(false);
        
    }
    return (
        <div className="size-30 flex items-center justify-center rounded-lg p-2">
            <img
                src={tree1}
                alt=""
                className="hover:transform hover:scale-110 transition-transform duration-300 cursor-pointer active:scale-100"
                onClick={() => setShowModal(true)}
            />

            {showModal && <CryptoHarvestModal onConfirm={() => handleConfirmClick()} onCancel={() => setShowModal(false)} />}
        </div>
    );
};

export default CryptoTree;