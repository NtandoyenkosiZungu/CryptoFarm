import { CryptoItem } from "../components/CryptoItem";
import { CryptoItemContainer } from "../components/CryptoItemContainer";
import CryptoGarden from "../components/CryptoGarden";

const HomePage = () => {
    return (
        <div className="w-1/1 grid grid-rows-2 gap-5 pl-5 pr-5 mt-[4rem]  lg:grid-cols-2 lg:fixed" >
            <div className="w-full h-[calc(88%-4rem)] grid grid-rows-2 gap-1">
                <div className="w-1/1 h-9/10 bg-white border-2 border-gray-200 p-5 relative rounded-xl m-auto">
                    
                </div>

                <CryptoItemContainer>
                    <CryptoItem/>
                    <CryptoItem/>
                    <CryptoItem/>
                    <CryptoItem/>
                    <CryptoItem/>
                    <CryptoItem/>
                </CryptoItemContainer>
            </div>
            <div className="w-full h-[calc(88%-5rem)] flex justify-center items-center border-gray-200 rounded-xl mt-4.5">

            </div>
            <CryptoGarden />
        </div>
    );
};


export default HomePage;