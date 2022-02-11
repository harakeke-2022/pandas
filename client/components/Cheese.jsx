import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients } from '../actions'

function Cheese (props) {
  return (
    <>
      <p className='font'>
        {props.cheese.name}
        <img src={`images/cheese/${props.cheese.name}.jpg`} alt='cheese' className='body-image'/>
      </p>
      <div className = 'font'>
        {props.cheese.name}<button onClick={handleClick}>Add</button>
      </div>
    </>
  )
}

export default Cheese
