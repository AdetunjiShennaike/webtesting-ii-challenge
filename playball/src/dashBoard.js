import React from 'react'

export const Display = (props) => {
  return (
  <div className='buttons'>
    <button onClick={props.strike}>Strike</button>
    <button onClick={props.ball}>Ball</button>
    <button onClick={props.foul}>Foul</button>
    <button onClick={props.hit}>Hit</button>
  </div>
  )
}