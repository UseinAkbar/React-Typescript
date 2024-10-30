import React from 'react'

// with Intersection "&"
// type ButtonProps = {
//     type: 'button' | 'submit',
//     color: 'red' | 'black'
// }

// type SuperButtonProps = ButtonProps & {
//     size: 'sm' | 'md' | 'lg'
// }

// with interface "extends"
interface ButtonProps {
  type: 'button' | 'submit',
  color: 'red' | 'black'
}

interface SuperButtonProps extends ButtonProps {
  size: 'sm' | 'md' | 'lg'
}

const IntersectButton = ({type, color, size}: SuperButtonProps) => {
  return (
    <button type={type} className={`text-${color} btn-${size}`}>IntersectButton</button>
  )
}

export default IntersectButton