import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIngredients } from '../actions/index'

import Bun from './Bun'
import Patty from './Patty'
import Topping from './Topping'
import Cheese from './Cheese'
import Sauce from './Sauce'

function App () {
  const pattys = useSelector(state => state.ingredients.filter(ingredient => ingredient.type === 'patty'))
  const buns = useSelector(state => state.ingredients.filter(ingredient => ingredient.type === 'bun'))
  const toppings = useSelector(state => state.ingredients.filter(ingredient => ingredient.type === 'topping'))
  const cheeses = useSelector(state => state.ingredients.filter(ingredient => ingredient.type === 'cheese'))
  const sauces = useSelector(state => state.ingredients.filter(ingredient => ingredient.type === 'sauce'))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIngredients())
  }, [])
  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Ingredients!</h1>
        <h2> Buns </h2>
        {buns.map(bun => {
          return (
            <Bun bun={bun.name} key={bun.id}/>
          )
        })
        }
        <h2> Pattys </h2>
        {pattys.map(patty => {
          return (
            <Patty patty={patty.name} key={patty.id} />
          )
        })
        }
        <h2> Toppings </h2>
        {toppings.map(topping => {
          return (
            <Topping topping={topping.name} key={topping.id} />
          )
        })
        }
        <h2> Cheeses </h2>
        {cheeses.map(cheese => {
          return (
            <Cheese cheese={cheese.name} key={cheese.id} />
          )
        })
        }
        <h2> Sauces </h2>
        {sauces.map(sauce => {
          return (
            <Sauce sauce={sauce.name} key={sauce.id} />
          )
        })
        }
      </div>
    </>
  )
}

export default App
