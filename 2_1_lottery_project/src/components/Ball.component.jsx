import React, { useState } from 'react';

const Ball = ({ maxNum }) => {
    return (
        <div className="circle">{
            Math.floor(Math.random() * maxNum)
        }</div>
    )
}

export default Ball