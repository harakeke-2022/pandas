import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions'

function Sauce (props) {
  const dispatch = useDispatch()
  const yourBurger = useSelector(state => state.cart)
  const saucesInCart = yourBurger.filter(ingredient => ingredient.type === 'sauce')
  const saucen = props.sauce
  function handleClick () {
    if (saucesInCart.length < 3) { dispatch(addToCart(saucen)) } else { alert('You can only have three sauces you greedy pig!') }
    // console.log('clicked')
  }
  return (
    <>
      <p className='font'>

        <img src={`images/sauce/${props.sauce.name}.jpg` } onClick={handleClick} alt='sauces' className='body-image'/>
        <br></br><br></br>{props.sauce.name} <br></br><br></br> <br></br><br></br>
      </p> </>
  )
}
export default Sauce
