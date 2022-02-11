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

        <div className='flex-center'>
          <img src='main-header-burger.jpg' alt='burgers' className='header-burger'></img>
        </div>
        <br></br>
        <div className='font'>
          <p>Feeling hungry? 🤤 Build your own burger below! 🍔</p>
        </div>

        <p className='header-font'>Bun</p>
        <div className='img-row'>
          {buns.map(bun => {
            return (
              <Bun bun={bun} key={bun.id}/>
            )
          })
          }
        </div>

        <p className='header-font'>Patty</p>
        <div className='img-row'>
          {pattys.map(patty => {
            return (
              <Patty patty={patty} key={patty.id} />
            )
          })
          }
        </div>

        <p className='header-font'>Toppings</p>
        <div className='img-row'>
          {toppings.map(topping => {
            return (
              <Topping topping={topping} key={topping.id} />
            )
          })
          }
        </div>evenly

        <p className='header-font'>Cheese</p>
        <div className='img-row'>
          {cheeses.map(cheese => {
            return (
              <Cheese cheese={cheese} key={cheese.id} />
            )
          })
          }
        </div>

        <p className='header-font'>Sauce</p>
        <div className='img-row'>
          {sauces.map(sauce => {
            return (
              <Sauce sauce={sauce} key={sauce.id} />
            )
          })
          }
        </div>
      </div>
      <div className='footer'>
        <Cart />
      </div>
    </>
  )
}

export default App
