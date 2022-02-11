import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Sauce (props) {
  return (
<>
<p className='font'>
    {props.sauce.name}
    <img src={`images/sauce/${props.sauce.name}.jpg`} alt='sauce' className='body-image'/>
  </p>
  <div className = 'font'>
    {props.sauce.name}<button onClick={handleClick}>Add</button>
    </div>
</>
)
}
export default Sauce
