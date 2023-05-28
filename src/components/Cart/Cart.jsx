import React from 'react'
import Button from '../Button/Button'
import './Cart.css'


const Cart = (props) => {

  const {image, title, desc, price} = props
 
  
  return (
    <div className='cart'>
      <img src={image} alt="image catalog" />
      <div className="block_title">
        <p className="title">
        {title}
        </p>
        <p className="desc">
        {desc}
        </p>
        <p className="price">
        {price}€
        </p>
      </div>
      <Button titleBtn = 'Рассрочка' />
    </div>
  )
}

export default Cart