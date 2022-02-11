import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Cart () {
  const yourBurger = useSelector(state => state.cart)
  const priceArr = yourBurger.map(ingredient => ingredient.price)

  return (
    <>
      <p>Your Burger:{yourBurger.map(ingredient => (
        <li key={ingredient}>{ingredient.name}</li>
      ))}
      </p><br></br>
      <p>Price: ${
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
