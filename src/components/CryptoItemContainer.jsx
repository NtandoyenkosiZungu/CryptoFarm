import { useEffect, useState } from "react";
import fetchCryptoData from "../services/fetchCryptoData";
import { CryptoItem } from "../components/CryptoItem";

export const CryptoItemContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchCryptoData();
      setData(result);
    };
    loadData();
  }, []);

  return (
    <div className="w-1/1 h-1/1 max-h-[400px] bg-white border-2 border-gray-200 p-2 relative rounded-xl flex flex-wrap gap-2 justify-center overflow-y-scroll">
      {data.map((element, index) => (
        <CryptoItem key={index} data={element} index={index} />
      ))}
    </div>
  );
};
