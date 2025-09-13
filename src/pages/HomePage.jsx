import { CryptoItemContainer } from "../components/CryptoItemContainer";
import  CryptoGarden  from "../components/CryptoGarden";
import TradingViewChart  from "../services/TradingViewChart"

const HomePage = () => {
    return (
        <div className="w-1/1 grid grid-rows-2 gap-5 pl-5 pr-5 mt-[4rem]  lg:grid-cols-2 lg:fixed" >
            <div className="w-full h-[calc(88%-4rem)] grid grid-rows-2 gap-1">
                <div className="w-1/1 h-9/10 bg-white relative rounded-xl m-auto">
                    <TradingViewChart />
                </div>
                <CryptoItemContainer />
            </div>
            <CryptoGarden />
        </div>
    );
};


export default HomePage;