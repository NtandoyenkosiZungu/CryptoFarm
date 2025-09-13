import tree1 from "../assets/Bitcoin/btcTree10.png"


const CryptoTree = () => {
    
    return (
        <div className="size-30 flex items-center justify-center rounded-lg   p-2">

            <img src={tree1} alt=""  className="hover:transform hover:scale-110 transition-transform duration-300 cursor-pointer active:scale-100"/>
        </div>
    )
}

export default CryptoTree;