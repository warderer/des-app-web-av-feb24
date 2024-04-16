import { useState } from 'react'
import './App.css'
import Logos from './Logos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logos saludo="Hola Alumnos" />

    <Logos saludo="Hola Delfines" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Si funciona muy bien esto de Vite con React
      </p>
      <div></div>
    </>
    
  )
}

export default App
