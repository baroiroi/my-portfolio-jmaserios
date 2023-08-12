import React from 'react'
import Johnroy from "./Johnroy.mp4"

export const Vid = () => {
  return (
    <div>
      <video autoPlay loop>
        <source src={Johnroy} type="video/mp4"/>
      </video>
    </div>
  )
}
