import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/'element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
