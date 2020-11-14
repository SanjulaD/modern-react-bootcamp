import React from 'react';

import './PokeCard.styles.css';

const PokeCard = ({ id, name, type, exp }) => {

    const padId = id => {
        return id.toString().padStart(3, '0')
    }

    return (
        <div className="col-md-3 card-pack">
            <div className="card">
                <h3 className="title">{name}</h3>
                <img
                    className="img mx-auto"
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(id)}.png`}
                    alt={name} 
                    id="img-tag"
                />
                <div className="card-body">
                    <p className="types">Type: {type} <br /> EXP: {exp}</p>
                </div>
            </div>
        </div>
    )
}

export default PokeCard;