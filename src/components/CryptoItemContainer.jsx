


export const CryptoItemContainer = ({ children }) => {
    return (
        <div className="w-1/1 h-1/1 max-h-[400px] bg-white border-2 border-gray-200  p-2  relative rounded-xl  flex-row row gap-2 flex flex-wrap justify-center overflow-hidden overflow-y-scroll">
            {children}
        </div>
    );
};
