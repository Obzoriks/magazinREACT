
import React, {useState} from 'react'
import Button from '../Button/Button'
import './Cart.css'


const Cart = (props) => {

  const {
    image,
     title,
      desc,
       price,
       bbb,
       dei
        }
          = props



          
 
  
  return (
    <div className='cart'>
      <img src={image} alt="image catalog" />
      <div className="block_title">
        <p className="title">
        {title}
        </p>
        <p className="desc">
       ОПИСАНИЕ: <br></br> {desc}
        </p>
        <p className="price">
        {price}€
        </p>
      </div>
      <Button 

     
      sai = {bbb}
      titleBtn = 'купить'
              
      />
    </div>
  )
}

export default Cart