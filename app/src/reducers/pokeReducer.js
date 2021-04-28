import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from "../actions/pokeActions.js"

const initialState = {
  pokemon: {},
  error: '',
  loading: false
}

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {...state, loading: true}
    case FETCHING_SUCCESS:
      return {...state, loading: false, poke: action.payload}
    case FETCHING_FAILURE:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
}