import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Bun (props) {
  // const bunName = props.bun.name
  return (
    <p>
      {props.bun.name}
      <img src={`images/bun/${props.bun.name}.jpg`} alt='buns'/>
    </p>
  )
}

export default Bun
