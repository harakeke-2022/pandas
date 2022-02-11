import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Cart () {
  const yourBurger = useSelector(state => state.cart)

  return (
    <>
      <p>Your Burger:{yourBurger.map(ingredient => (
        <li key={ingredient}>{ingredient.name}</li>
      ))}
      </p>
    </>
  )
}

export default Cart
