import React from 'react';
import Lotto from './Lotto/Lotto.component';
import Mini from './Mini Daily/Mini.component';

const Lottery = () => {
    return (
        <div className="container">
            <div className="list-group">
                <Lotto
                    title="Lotto"
                    numBalls={6}
                    maxNum={40}
                />
                <Mini
                    title="Mini Daily"
                    numBalls={4}
                    maxNum={8}
                />
            </div>
        </div>
    )
}

export default Lottery;