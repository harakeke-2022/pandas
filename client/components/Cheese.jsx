import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Cheese (props) {
  return (
    <ul>
      <li>{props.cheese}</li>
    </ul>
  )
}

export default Cheese
