import { getIngredients } from '../apis/ingredients'

export const SET_INGREDIENTS = 'SET_INGREDIENTS'
export const ADD_TO_CART = 'ADD_TO_CART'

export function setIngredients (ingredients) {
  return {
    type: SET_INGREDIENTS,
    ingredients
  }
}

export function fetchIngredients () {
  return dispatch => {
    return getIngredients()
      .then(ingredients => {
        dispatch(setIngredients(ingredients))
        // console.log(ingredients)
        return null
      })
  }
}

export function addToCart (ingredient) {
  // console.log(ingredient)
  return {
    type: ADD_TO_CART,
    ingredient
  }
}
