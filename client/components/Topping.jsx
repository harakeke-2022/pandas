import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Topping (props) {
  // console.log(props.topping)
  return (
    <>
    <p className='font'>
      {props.topping.name}
      <img src={`images/topping/${props.topping.name}.jpg`} alt='topping' className='body-image'/>
    </p>
    <div className = 'font'>
      {props.topping.name}<button onClick={handleClick}>Add</button>
      </div>
  </>
  )
  }

export default Topping
