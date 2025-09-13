

export const NavBar = () => {

    return (
        <>
            <div className="bg-white w-[98%] h-16 grid grid-cols-2 items-center px-4 rounded-lg border-2 border-gray-200">
                {/* Left: Logo + Name */}
                <div className="flex items-center space-x-2 ">
                    <img src={'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'} alt="logo" className="h-14 w-15 " />
                    <div className="text-black text-lg font-mono">CryptoFarm</div>
                </div>

                {/* Right: Search + Cart */}
                <div className="flex items-center justify-end space-x-4">
                    <div className="h-10 w-20 bg-white-200 flex items-center justify-center rounded-lg border-2 border-gray-200">
                        username
                    </div>
                    <div>
                        <img src={'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'} alt="logo" className="h-14 w-15 " />
                    </div>

                </div>
            </div>
        </>
    )
}