import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Cart () {
  const yourBurger = useSelector(state => state.cart)
  const priceArr = yourBurger.map(ingredient => ingredient.price)

  return (
    <>
      <p className='textclass'>Your Burger: </p>{yourBurger.map(ingredient => (
        <span key={ingredient}><img src={`images/${ingredient.type}/${ingredient.name}.jpg`} className='tinyimg' ></img></span>
      ))}
      <p className='textclass'>Price: ${
        priceArr.length > 0
          ? priceArr.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
          })
          : 0
      }
      </p>
    </>
  )
}

export default Cart
