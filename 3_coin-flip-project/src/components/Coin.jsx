import React from 'react'
import PropTypes from 'prop-types'

const Coin = ({ face, imgUrl }) => {
    return (
        <div className="Coin">
            <img src={imgUrl} alt={face} width="200" />
        </div>
    )
}

Coin.propTypes = {
    face: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
}

export default Coin