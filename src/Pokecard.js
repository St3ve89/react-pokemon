import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    const {id, name, type, exp} = this.props;
    let imgSrc = `${POKE_API}${padToThree(id)}.png`
    return (
      <div className="pokecard">
        <h1 className="pokecard-title">{name}</h1>
        <img src={imgSrc} alt={name}/>
        <div className="pokecard-data">Type: {type}</div>
        <div className="pokecard-data">Exp: {exp}</div>
      </div>
    )
  }
}


export default Pokecard;