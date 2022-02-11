import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions'

function Bun (props) {
  const dispatch = useDispatch()
  const bunn = props.bun
  function handleClick () {
    dispatch(addToCart(bunn))
    // console.log('clicked')
  }
  return (
    <ul>
      <li>{props.bun.name}<button onClick={handleClick}>Add</button></li>
    </ul>
  )
}

export default Bun
