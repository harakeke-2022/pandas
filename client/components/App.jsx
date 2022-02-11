import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIngredients } from '../actions/index'

import Bun from './Bun'
import Patty from './Patty'
import Topping from './Topping'
import Cheese from './Cheese'
import Sauce from './Sauce'
import Cart from './Cart'

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
        <h1 className='title'>Build-a-Burger</h1>
        <p className='header-font'>Bun</p>
        {buns.map(bun => {
          return (
            <Bun bun={bun} key={bun.id}/>
          )
        })
        }
        <p className='header-font'>Patty</p>
        {pattys.map(patty => {
          return (
            <Patty patty={patty.name} key={patty.id} />
          )
        })
        }
        <p className='header-font'>Toppings</p>
        {toppings.map(topping => {
          return (
            <Topping topping={topping.name} key={topping.id} />
          )
        })
        }
        <p className='header-font'>Cheese</p>
        {cheeses.map(cheese => {
          return (
            <Cheese cheese={cheese.name} key={cheese.id} />
          )
        })
        }
        <p className='header-font'>Sauce</p>
        {sauces.map(sauce => {
          return (
            <Sauce sauce={sauce.name} key={sauce.id} />
          )
        })
        }
      </div>
      <div>
        <Cart />
      </div>
    </>
  )
}

export default App
