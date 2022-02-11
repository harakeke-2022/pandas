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
  <>
    <p>
      {props.bun.name}
      <img src={`images/bun/${props.bun.name}.jpg`} alt='buns'/>
    </p>
      {props.bun.name}<button onClick={handleClick}>Add</button>
  </>
  )
}

export default Bun
