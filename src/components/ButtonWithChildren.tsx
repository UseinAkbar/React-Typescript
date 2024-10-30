import React from 'react'

// Children type
type ButtonProps = {
  styles: React.CSSProperties,
  children: React.ReactNode,
  setCount: React.Dispatch<React.SetStateAction<number>>
  setList: React.Dispatch<React.SetStateAction<never[]>>
}

const ButtonWithChildren = ({children, styles, setCount, setList}: ButtonProps) => {
    
  return (
    <button 
      type='button' 
      style={styles}
    >{children}</button>
  )
}

export default ButtonWithChildren