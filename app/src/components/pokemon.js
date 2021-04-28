import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions/pokeActions";

const Pokemon=(props)=>{

    useEffect(()=>{
        props.fetchPokemon();
    },[props.fetchPokemon])

    if(props.loading)
    {
        return(
            <p>...fetching pokemon</p>
        )
    }
    return (
        <>
          <h3>{props.pokemon.setup}</h3>
          <h2>{props.pokemon.punchline}</h2>
          <button onClick={() => props.fetchPokemon()}>Fetch pokemon</button>
        </>
      )
}

const mapStateToProps=(state)=>{
    return {
        pokemon: state.pokemon,
        loading: state.loading
      }
}

const mapDispatchToProps={fetchPokemon}

export default connect(mapStateToProps,mapDispatchToProps)(Pokemon);