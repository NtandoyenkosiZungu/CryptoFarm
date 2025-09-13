
import CryptoTree from "./CryptoTree"


const CryptoGarden = () => {
    return (

        <div className="w-full h-[calc(88%-5rem)] bg-green-400 rounded-xl mt-4.5 grid grid-cols-4 grid-rows-4 p-4">
            <CryptoTree />
            <CryptoTree />
            <CryptoTree />
            <CryptoTree />
            <CryptoTree />
            <CryptoTree />
            <CryptoTree />
        </div>
    )
}

export default CryptoGarden
