import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions'

function Bun (props) {
  const dispatch = useDispatch()
  const yourBurger = useSelector(state => state.cart)
  const bunsInCart = yourBurger.filter(ingredient => ingredient.type === 'bun')
  const bunn = props.bun
  function handleClick () {
    if (bunsInCart.length < 1) { dispatch(addToCart(bunn)) } else { alert('You can only have one bun you greedy pig!') }
    // console.log('clicked')
  }
  return (
    <>
      <p className='font'>
        <img src={`images/bun/${props.bun.name}.jpg` } onClick={handleClick} alt='buns' className='body-image'/>
        <br></br><br></br>{props.bun.name} </p>
    </>
  )
}

export default Bun
