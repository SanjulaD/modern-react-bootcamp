import React from 'react';

const Die = ({ face }) => {
    return (
        <i className={`Die fas fa-dice-${face}`} />
    )
}

export default Die;