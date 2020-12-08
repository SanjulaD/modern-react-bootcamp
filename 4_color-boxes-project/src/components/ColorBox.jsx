import React from 'react'
import PropTypes from 'prop-types'

const randomColor = colors => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const ColorBox = ({ colors }) => {
  const boxStyle = {
    // maintains 1:1 aspect ratio with width
    paddingTop: '100%',
    backgroundColor: randomColor(colors),
  }

  const handleClick = e => {
    const currentColor = e.target.style.backgroundColor
    const newColor = randomColor(colors)
    //* Don't repeat current color
    if (newColor === currentColor) {
      handleClick(e) // try again, with same event info
    } else {
      e.target.style.backgroundColor = newColor
    }
  }

  return <div className="ColorBox" onClick={handleClick} style={boxStyle} />
}

ColorBox.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default ColorBox