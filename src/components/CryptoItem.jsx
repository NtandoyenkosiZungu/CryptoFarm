


export const CryptoItem = () => {
    return (
        <div className="w-1/1 h-15 bg-white border-2 border-gray-200 p-5 relative rounded-xl  flex gap-6">
            <div className="absolute top-3">
                <img 
                    src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" 
                    alt="" 

                    className="size-9 "
                />
            </div>
            <div className="flex gap-4 absolute left-1/5">
                <span id="price">
                    {"$116,121"}
                </span>

                <span id="1h">
                    {"0.8%"}
                </span>

                <span id="24h">
                    {"1.3%"}
                </span>

                <span id="7d">
                    {"5.7%"}
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