import React from 'react'
import './header.css'
import shopas from '../assets/magaz/green-shopping-cart-10909.svg'


const Header = () => {
  return (
    <nav class="navbar">
      
      <div class="logo">пшёл вон! верни почку</div>

        <a href="#">Обо нас</a>
        <a href="#">Каталог</a>
        <a href="#">Контакты</a>
        <div class="icon">
        
            <img src= {shopas} alt="icon" />
        </div>
    </nav>
  )
}

export default Header