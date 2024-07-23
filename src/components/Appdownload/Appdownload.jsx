import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>

    <p>For Better Experience Download <br/>Oterro App</p>

    <div className='app-download-platform'>
    <img src={assets.play} alt=''/>
    <img src={assets.app} alt=''/>

    </div>



      
    </div>
  )
}

export default Appdownload
