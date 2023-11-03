import './Input.css'
import React from 'react'


const Input = React.forwardRef((props,ref) => {
  return (
    <div className='input'>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input

/*
{...props.input}
it is similar to typing
<input
  id={props.input.id}
  type={props.input.type}
  min={props.input.min}
  max={props.input.max}
  defaultValue={props.input.defaultValue}
/>
{} are removed by ...
*/
