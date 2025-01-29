import React from 'react'

const Button = ({text,colors}) => {
  return (
    <>
        <button className={`${colors ? "bg-white" : " theembutton"} '  btn '`}> {text} </button> 
    </>
  )
}

export default Button
