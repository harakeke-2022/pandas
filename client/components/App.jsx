import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIngredients } from '../actions/index'

function App () {
  const ingredients = useSelector(state => state.ingredients)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIngredients())
  }, [])

  return (
    <>
      <h1 className='title'>Build-a-Burger</h1>
      <img src='burger-1.jpg' alt="burgers"></img>
      <p className='header-font'>Bun</p>
      <p className='header-font'>Patty</p>
      <p className='header-font'>Toppings</p>
      <p className='header-font'>Cheese</p>
      <p className='header-font'>Sauce</p>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  )
}

export default App
