import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Patty (props) {
  // console.log(props.patty)
  return (
    <ul>
      <li>{props.patty}</li>
    </ul>
  )
}

export default Patty
