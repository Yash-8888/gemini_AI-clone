import { useState } from 'react'
import './App.css'
import SideBar from './Component/SideBar/SideBar.jsx'
import Main from './Component/Main/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App-flex">
      <SideBar/>
      <Main/>
    </div>
  )
}

export default App
