import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Sauce (props) {
  return (
    <ul>
      <li>{props.sauce}</li>
    </ul>
  )
}

export default Sauce
