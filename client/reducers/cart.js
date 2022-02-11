import {
  ADD_TO_CART
} from '../actions'

function cart (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
    //   console.log(state)
      return getNewCart(state, action.ingredient)
    default:
      return state
  }
}
export default cart

export function getNewCart (cart, product) {
  const exists = false
  const newCart = cart.map(item => {
    // If the id already exists, the quantity will be incremented.
    if (item.id === product.id) {
      return item
    }
    return item
  })

  if (exists) {
    return newCart
  } else {
    // If the id doesn't exist, it will be added with a quantity of 1.
    newCart.push({ ...product })
    console.log(newCart)
    return newCart
  }
}
