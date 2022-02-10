import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Bun (props) {
  return (
    <ul>
      <li>{props.bun}</li>
    </ul>
  )
}

export default Bun
