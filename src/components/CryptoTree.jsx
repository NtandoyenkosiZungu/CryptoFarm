// Bitcoin
import btcTree1 from "../assets/Bitcoin/btcTree1.png";
import btcTree2 from "../assets/Bitcoin/btcTree2.png";
import btcTree3 from "../assets/Bitcoin/btcTree3.png";
import btcTree4 from "../assets/Bitcoin/btcTree4.png";
import btcTree5 from "../assets/Bitcoin/btcTree5.png";
import btcTree6 from "../assets/Bitcoin/btcTree6.png";
import btcTree8 from "../assets/Bitcoin/btcTree8.png";
import btcTree9 from "../assets/Bitcoin/btcTree9.png";
import btcTree10 from "../assets/Bitcoin/btcTree10.png";

// Ethereum

// XRP
import xrpTree1 from "../assets/XRP/xrpTree1.png";
import xrpTree2 from "../assets/XRP/xrpTree2.png";
import xrpTree3 from "../assets/XRP/xrpTree3.png";
import xrpTree4 from "../assets/XRP/xrpTree4.png";
import xrpTree5 from "../assets/XRP/xrpTree5.png";
import xrpTree6 from "../assets/XRP/xrpTree6.png";
import xrpTree7 from "../assets/XRP/xrpTree7.png";
import xrpTree8 from "../assets/XRP/xrpTree8.png";
import xrpTree9 from "../assets/XRP/xrpTree9.png";
import xrpTree10 from "../assets/XRP/xrpTree10.png";

// Others
import othTree1 from "../assets/Others/othTree1.png";
import othTree2 from "../assets/Others/othTree2.png";
import othTree3 from "../assets/Others/othTree3.png";
//import othTree4 from "../assets/Others/othTree4.png";
import othTree5 from "../assets/Others/othTree5.png";
import othTree6 from "../assets/Others/othTree6.png";
import othTree7 from "../assets/Others/othTree7.png";
import othTree8 from "../assets/Others/othTree8.png";
import othTree9 from "../assets/Others/othTree9.png";
import othTree10 from "../assets/Others/othTree10.png";

import { useState } from "react";
import CryptoHarvestModal from "./CryptoHarvestModal";


const CryptoTree = ({cryptourrency, initial}) => {
    
    const [showModal, setShowModal] = useState(false);
    const [currentPrice, setCurrentPrice] = useState();
    const [priceChange, setPriceChange] = useState();
    const [harvest, setHarvest] = useState();


    const onSelectClick = async() => {
        const response = await fetch(`http://localhost:3000/crypto?coin=${'bitcoin'}`);

        if(!response.ok) throw new Error(`Failed to fetch data: ${response.status}`);
        
        const data = await response.json();
        console.log(data);

        let newCurrentPrice = Number(data.current_price_usd);
        let newPriceChange = Number(data.price_change_24h);
        let newHarvest = initial + initial * priceChange;

        setCurrentPrice(newCurrentPrice);
        setPriceChange(newPriceChange);
        setHarvest((newHarvest))

        console.log("Current Price", currentPrice);
        console.log("Price Change", priceChange);
        console.log("Harvest", harvest)

        setShowModal(true)
    }

    const handleConfirmClick = () => {
        // Additional logic for confirming the harvest can be added here
        alert("Harvest Confirmed!");
        setShowModal(false);
        
    }

    return (
        <div className="size-30 flex items-center justify-center rounded-lg p-2">
            <img
                src={othTree10}
                alt=""
                className="hover:transform hover:scale-110 transition-transform duration-300 cursor-pointer active:scale-100"
                onClick={() => onSelectClick()}
            />

            {showModal && <CryptoHarvestModal onConfirm={() => handleConfirmClick()} onCancel={() => setShowModal(false)} />}

        </div>
    );
};

export default CryptoTree;