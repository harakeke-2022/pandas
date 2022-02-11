import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions'

function Cheese (props) {
  const dispatch = useDispatch()
  const yourBurger = useSelector(state => state.cart)
  const cheesesInCart = yourBurger.filter(ingredient => ingredient.type === 'cheese')
  const cheesen = props.cheese
  function handleClick () {
    if (cheesesInCart.length < 2) { dispatch(addToCart(cheesen)) } else { alert('You can only have two cheeses you greedy pig!') }
    // console.log('clicked')
  }
  return (
    <>
      <p className='font'>
        <img src={`images/cheese/${props.cheese.name}.jpg` } onClick={handleClick} alt='cheeses' className='body-image'/>
        <br></br><br></br>{props.cheese.name}
      </p>
    </>
  )
}

export default Cheese
