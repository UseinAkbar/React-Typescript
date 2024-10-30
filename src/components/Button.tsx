import React, { FC } from 'react'

// Union Type
type ColorBg = 'bg-white' | 'bg-blue-950' | 'bg-green-950'
type ColorText = 'text-white' | 'text-blue-200' | 'text-green-200'

type ButtonProps = {
  bgColor: ColorBg,
  textColor: ColorText,
  fontSize: number,
  isRounded?: boolean,
  padding: [number, number],
  margin?: number[]
}

const Button = ({bgColor, textColor, fontSize, padding, margin, isRounded = true}: ButtonProps) => {
      
  return (
    <button type='button' className={`${bgColor} p-2 ${isRounded && 'rounded-md'} text-[${fontSize}px] font-semibold ${textColor} active:scale-95 duration-100 ease-linear`}>Click Me!</button>
  )
}

export default Button