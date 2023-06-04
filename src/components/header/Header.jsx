import React from 'react'
import './header.css'
import shopas from '../assets/magaz/green-shopping-cart-10909.svg'


const Header = (props) => {
  const {saba, dei} = props
  
  return (
    <nav className="navbar">
      
      <div className="logo">пшёл вон! верни почку</div>

        <a href="#">Обо нас</a>
        <a href="#">Каталог</a>
        <a href="#">Контакты</a>
        <div className="icon">
          <button className='mal' onClick={dei}>del</button>
          <h5>{saba}</h5>
        
            <img src= {shopas} alt="icon" />
        </div>
    </nav>
  )
}

export default Header