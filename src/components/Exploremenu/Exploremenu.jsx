import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'


const Exploremenu = ({category,setCategory}) => {
    return (
      <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p  className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit voluptatum recusandae excepturi totam doloribus, labore iusto, praesentium necessitatibus autem eveniet laudantium debitis deserunt voluptatibus nisi sapiente velit tempora incidunt.</p>
      <div className="explore-menu-list">
       {
          menu_list.map((item,index)=>
          {
              return(
                  <div onClick={()=>setCategory(prev=>prev===item.menu_image? "All":item.menu_name)} key={index}className='explore-menu-list-item'>
                      <img className={category===item.menu_name?"active":" "} src={item.menu_image} alt=""/>
                      <p>{item.menu_name}</p>
                  </div>
  
              )
          })
       }
  
      </div>
      <hr/>
        
      </div>
    )
  }
  
  export default Exploremenu
  