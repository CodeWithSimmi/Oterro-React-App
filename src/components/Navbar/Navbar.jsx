import React, { useContext, useState } from "react"
import "./Navbar.css"
import {assets} from "../../assets/assets"
import { Link} from 'react-router-dom'
import { StoreContext } from "../../context/Storecontext"

const Navbar=({setShowLogin})=>{


    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext)



    return (
        <div className="navbar" >
       <Link to='/'>  <img src={assets.logo} alt="" className="logo" /></Link>

    <ul className="navbar-menu">

       <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"? "active":" "}>Home</Link>
       <a href="#explore-menu"  onClick={()=> setMenu("menu")} className={menu==="menu"? "active":" "}>Menu</a>
       <a href="#app-download" onClick={()=> setMenu("Mobile-app")} className={menu==="Mobile-app"? "active":" "}>Mobile-App</a>
       <a href="#footer"  onClick={()=> setMenu("contact")} className={menu==="contact"? "active":" "}>Contact</a>

    </ul>
        
    <div className="navbar-right">
    <img src={assets.search} alt="" height="30px" />
    <div className="navbar-search-icons">
   <Link to='/cart'> <img src={assets.bag} alt="" height="30px"/></Link>
    <div className={getTotalCartAmount()===0?"":"dot"}></div>
 </div>
    <button onClick={()=>setShowLogin(true)}>Sign in</button>
    
    </div>


    </div>

        
    )

}

export default Navbar;