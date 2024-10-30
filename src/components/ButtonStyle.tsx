import React, { FC } from 'react'

// CSS Properties
type ButtonProps = {
  styles: React.CSSProperties,
  handleClick: (value: number) => number
}

const ButtonStyles = ({styles, handleClick}: ButtonProps) => {
      
  return (
    <button 
      type='button' 
      style={styles}
      onClick={() => handleClick(10)}
    >Click Me!</button>
  )
}

export default ButtonStyles