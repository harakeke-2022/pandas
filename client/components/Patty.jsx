import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Patty (props) {
  // console.log(props.patty)
  return (
<>
  <p>
    {props.patty.name}
    <img src={`images/patty/${props.patty.name}.jpg`} alt='patty'/>
  </p>
    {props.patty.name}<button onClick={handleClick}>Add</button>
</>
)
}

export default Patty

