import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions'

function Topping (props) {
  // console.log(props.topping)
  const dispatch = useDispatch()
  const yourBurger = useSelector(state => state.cart)
  const toppingsInCart = yourBurger.filter(ingredient => ingredient.type === 'topping')
  const toppingn = props.topping
  function handleClick () {
    if (toppingsInCart.length < 8) { dispatch(addToCart(toppingn)) } else { alert('You can only have one topping you greedy pig!') }
    // console.log('clicked')
  }
  return (
    <>
      <p className='font'>
        {props.topping.name}
        <img src={`images/topping/${props.topping.name}.jpg` } onClick={handleClick} alt='toppings' className='body-image'/>
      
      {props.topping.name} </p>
    </>
  )
  }

export default Topping
