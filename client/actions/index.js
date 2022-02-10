import { getIngredients } from '../apis/ingredients'

export const SET_INGREDIENTS = 'SET_INGREDIENTS'

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
        console.log(ingredients)
        return null
      })
  }
}
