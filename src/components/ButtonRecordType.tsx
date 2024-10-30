import React, { FC } from 'react'

// Record Types
type ButtonProps = {
  borderRadius: Record<string, number>
}

const ButtonRecordType = ({borderRadius}: ButtonProps) => {
      
  return (
    <button 
      type='button' 
    >Click Me!</button>
  )
}

export default ButtonRecordType