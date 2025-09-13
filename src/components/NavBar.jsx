

export const NavBar = () => {

    return (
        <>
            <div className="bg-neutral-500 w-1/3 h-20 flex rounded-[5px] justify-between">
                {/* the logo of the page */}
                <img src={''} alt="logo" className="h-6 w-6" />
                <div className="text-black text-lg font-mono font-normal text-center">
                    CryptoFarm
                </div>

                {/* search bar  */}
                <div className="bg-neutral-500 w-1/4 h-20">
                    search index
                </div>
                {/* cart div */}
                <div className="h-6 w-6">
                    Crt
                </div>
            </div>
        </>
    )
}