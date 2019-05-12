import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    const {pokemons, exp, isWinner} = this.props;
    let title;
    if(isWinner) {
      title = <h1 className="pokedex-winner">Winnig Hand</h1>
    } else {
      title = <h1 className="pokedex-loser">Losing Hand</h1>
    }
    return (
      <div className="pokedex">
        {title}
        <h4>Total Exp: {exp} </h4>
        <div className="pokedex-cards">
          {pokemons.map(p => (
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex