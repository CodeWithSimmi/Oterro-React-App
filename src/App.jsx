import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Placeholder from './pages/Placeholder/Placeholder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
import { useState } from 'react'



const App = () => {

  const  [showLogin,setShowLogin]= useState(false)
  
  return (

    <>

{showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}


<div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
 
         <Routes>
 
              <Route path='/' element={<Home/>} />
              <Route path='/cart' element={<Cart/>} /> 
              <Route path='/order' element={<Placeholder/>} />

          


   

      
     </Routes>
     </div>
     <Footer/>
     

    </>
    
)
}


  

export default App
