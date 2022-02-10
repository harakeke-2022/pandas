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
      <div className='app'>
        <h1>Fullstack Boilerplate - with Ingredients!</h1>
        <ul>
          {ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
