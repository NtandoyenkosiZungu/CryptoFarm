import './App.css'
import { CounterProvider } from './components/CounterContext'
import { CryptoProvider } from './components/CryptoContext'
import { NavBar } from "./components/NavBar"
import HomePage  from './pages/HomePage'

function App() {



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
