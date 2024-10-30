import React from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: 'primary' | 'secondary';
}

const OtherButton = ({type, variant, ...rest}: ButtonProps) => {
  
  return (
    <button type={type} className={`bg-${variant}`} {...rest}>Click Me!</button>
  )
}

export default OtherButton