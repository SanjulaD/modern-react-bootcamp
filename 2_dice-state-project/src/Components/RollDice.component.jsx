import React, { useState } from 'react';

import Die from './Die.component';

const RollDice = ({ sides }) => {

    const [Die1, setDie1] = useState("one");
    const [Die2, setDie2] = useState("one");

    const roll = () => {

        // pick 2 new rolls
        const newDieOne = sides[Math.floor(Math.random() * sides.length)];
        const newDieTwo = sides[Math.floor(Math.random() * sides.length)];

        // set state with new roll
        setDie1(newDieOne);
        setDie2(newDieTwo);
    }

    return (
        <div className="RollDice">
            <div className="RollDice__dice">
                <Die face={Die1} />
                <Die face={Die2} />
                <button onClick={() => roll()} >Roll Dice!</button>
            </div>
        </div>
    );
}

RollDice.defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
}

export default RollDice;