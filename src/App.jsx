import './App.css'
import { CounterProvider } from './components/CounterContext'
import { CryptoProvider } from './components/CryptoContext'
import { NavBar } from "./components/NavBar"
import HomePage  from './pages/HomePage'

function App() {

//   let fun = async () => {
//     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h'; 
//   // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&price_change_percentage=1h';

//   const options = {
//     method: 'GET',
//     headers: {
//       'accept': 'application/json',
//       'Authorization': 'Bearer CG-F8vXb1aFehKu75K9QbVJsC6h'  // <-- use Authorization instead
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }}

// fun();


  return (
    <>
      <div className="mt-[-0.5%] w-[100%] flex justify-center fixed">
        <NavBar />
      </div>
      <CounterProvider>
        <CryptoProvider>
        <HomePage />
        </CryptoProvider>
      </CounterProvider>
           
    </>
  )
}

export default App
