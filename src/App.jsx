import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Header from './component/common/header'
import AllRoutes from './component/Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllRoutes/>
    </>
  )
}

export default App
