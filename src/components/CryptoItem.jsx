
export const CryptoItem = ({ data }) => {
    return (
        

        /* id: 'bitcoin', 
        symbol: 'btc',
        name: 'Bitcoin', 
        image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', 
        current_price: 115780, */

        <div className="w-1/1 h-15 bg-white border-2 border-gray-200 p-5 relative rounded-xl  flex gap-6">
            <div className="absolute top-3">
                <img 
                    src={data.image}
                    alt={data.symbol} 

                    className="size-9 "
                />
            </div>
            <div className="flex gap-4 absolute left-1/5">
                <span>
                    { data.symbol.toUpperCase() }
                </span>
                <span id="price">
                    { '$' + data.current_price }
                </span>

                <span id="1h">
                    { data.price_change_24h + '%'}
                </span>

                <span id="24h">
                    { data.price_change_24h  + '%'}
                </span>

                <span id="7d">
                    { data.price_change_24h + '%'}
                </span>
                <span>

                </span>
            </div>

            <button
                className=" absolute bg-green-500 hover:bg-green-600 text-white font-semibold  w-25 p-2 right-5 bottom-2 rounded-lg shadow-black hover:translate-y-[-3px] transition-all active:translate-y-0"
            >
                Plant
            </button>
        </div>
    )
}