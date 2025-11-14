import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import TargetForm from './Pages/TargetForm'
import WeeklyPlan from './Pages/WeeklyPlan'
import Contact from './Pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
     <Route path='/target-setup' element={<TargetForm/>}/>
     <Route path="/weekly-plan" element={<WeeklyPlan/>}/>
     <Route path='/contact' element={<Contact/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
