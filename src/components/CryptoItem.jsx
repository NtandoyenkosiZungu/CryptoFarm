function saveObject(userData) {
    localStorage.setItem("user_" + userData.id, JSON.stringify({ id: userData.id, data: userData }));
    
    // manually dispatch custom event for same-tab updates
    window.dispatchEvent(new Event("cryptoSaved"));
  }
  
import { useState } from "react"
import CryptoPlantModal  from './CryptoPlantModal'

export const CryptoItem = ({ data }) => {
    const [showModal, setShowModal] =useState (false);

    const handlePlantClick = (id) => {


        
        if(!localStorage.getItem(id))
            localStorage.setItem(data.id, "0")
        
        setShowModal(false);
    }

       /* id: 'bitcoin', 
        symbol: 'btc',
        name: 'Bitcoin', 
        image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', 
        current_price: 115780, */

    return (
        <>
            <div className="w-full h-15 bg-white border-2 border-gray-200 p-5 relative rounded-xl flex items-center gap-6">
                <div>
                    <img 
                        src={data.image}
                        alt={data.symbol} 
                        className="size-9"
                    />
                </div>
                <div className="flex flex-1 justify-between items-center text-center px-6">
                    <span>{data.symbol.toUpperCase()}</span>
                    <span id="price">{'$' + data.current_price}</span>
                    <span id="1h">{Math.floor(Number(data.price_change_24h)) + '%'}</span>
                    <span id="24h">{Math.floor(Number(data.price_change_24h)) + '%'}</span>
                    <span id="7d">{Math.floor(Number(data.price_change_24h)) + '%'}</span>
                </div>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold w-25 p-2 rounded-lg shadow-black hover:translate-y-[-3px] transition-all active:translate-y-0"
                    onClick={() => { saveObject({ ...data }); setShowModal(true); }}
                >
                    Plant
                </button>
                {showModal && <CryptoPlantModal onCancel={() => setShowModal(false)} onPlant={()=> handlePlantClick(data.id)} id={data.id} initialPrice={data.current_price}/>}
            </div>
        </>
    )
}