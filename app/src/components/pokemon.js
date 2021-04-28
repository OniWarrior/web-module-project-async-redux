
import React,{useEffect} from "react";


import { fetchPokemon } from "../actions/pokeActions";
import { connect } from "react-redux";

function Pokemon(props) {
       
   
    
    useEffect(() => {
        
        props.fetchPokemon();
        
        console.log(props)
      }, [props.fetchPokemon]);
    
      if (props.loading) {
        return (
          <>
            <p>Fetching Poke...</p>
          </>
        )
      }
      return (
        <>
         
           <h1>Pokemon</h1>
           <div className='poki'>
              <h2>Name: {props.pokemon.name}</h2>
              
           </div>
           
          
        </>
      )
  }
  
  
  
  const mapStateToProps = (state) => {
    return {
      pokemon: state.pokemon,
      loading: state.loading
    }
  };
  
  const mapDispatchToProps={fetchPokemon}
    
   export default connect(mapStateToProps,mapDispatchToProps)(Pokemon);