
import logo from '../assets/logo.png';
export const NavBar = () => {

    return (
        <>
            <div className="bg-white w-[98%] h-16 grid grid-cols-2 items-center px-4 rounded-lg border-2 border-gray-200">
                {/* Left: Logo + Name */}
                <div className="flex items-center space-x-2 ">
                    <img src={logo} alt="logo" className="size-11 " />
                    <div className="text-black text-lg font-mono">CryptoFarm</div>
                </div>

                {/* Right: Search + Cart */}
                <div className="flex items-center justify-end space-x-4">
                    <div className="h-10 w-20 bg-white-200 flex items-center justify-center rounded-lg border-2 border-green-200 font-semibold">
                        {"$500.00"}
                    </div>
                    <div className="h-10 w-20 bg-white-200 flex items-center justify-center rounded-lg border-2 border-gray-200">
                        Sign in

                    </div>
                    <div>
                        <img src={'https://cdn.vectorstock.com/i/1000v/29/52/faceless-male-avatar-in-hoodie-vector-56412952.avif'} alt="logo" className="h-14 w-15 rounded-full" />
                    </div>

                </div>
            </div>
        </>
    )
}