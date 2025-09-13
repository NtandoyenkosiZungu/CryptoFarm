import './App.css'
import { NavBar } from "./components/NavBar"
import './App.css'
import { CryptoItem } from './components/CryptoItem'
import { CryptoItemContainer } from './components/CryptoItemContainer'

import HomePage  from './pages/HomePage'

function App() {

  return (
    <>
{/* 
      <CryptoItemContainer>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
        <CryptoItem/>
      </CryptoItemContainer> */}
      <div className="mt-[-0.5%] w-[100%] flex justify-center fixed">
        <NavBar />
      </div>
      <HomePage/>
    </>
  )
}

export default App
