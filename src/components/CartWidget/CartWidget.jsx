import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/128/3649/3649614.png"
  return (
    <div>
        <img className='imgCarrito' src = {imgCarrito}  alt="Carrito" />
        <strong className='numero'>5</strong>
    </div>
  )
}

export default CartWidget