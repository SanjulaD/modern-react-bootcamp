import React, { useState } from 'react';
import Ball from '../Ball.component';
import '../circle.css'

const Lotto = ({ title, numBalls, maxNum }) => {

    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const result = range(1, numBalls);

    const [randomNumber, setRandomNumber] = useState([result])

    const getRandomNumber = () => {
        setRandomNumber(result);
    }

    return (
        <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h1 className="mb-1 title">{title}</h1>
            </div>
            {
                result.map(number => (
                    <Ball
                        key={Math.floor(Math.random() * 10000)}
                        maxNum={maxNum}
                    />
                ))
            }
            <button type="button" className="btn btn-primary" onClick={getRandomNumber} >Generate</button>
        </div>
    )
}

export default Lotto;