import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"


export const fetchPokemon = () => (dispatch) => {
  
  dispatch({ type: FETCHING_START });
  axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
    
    .then((res => {
      console.log("API poke data:", res.data);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data})
    }))
    
    .catch(err => {
      console.log(err);
      dispatch({type: FETCHING_FAILURE, payload: err})
    });
}