import React from 'react';
import PokeCard from '../PokeCard/PokeCard.component';

const Pokedex = ({ data }) => {
    console.log(data);
    return (
        <div className="col-12">
            <div className="card-group">
                {
                    data.map(pokemone => (
                        <PokeCard
                            name={pokemone.name}
                            type={pokemone.type}
                            exp={pokemone.base_experience}
                            id={pokemone.id}
                            key={pokemone.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Pokedex;