import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Topping (props) {
  // console.log(props.topping)
  return (
    <ul>
      <li>{props.topping}</li>
    </ul>
  )
}

export default Topping
