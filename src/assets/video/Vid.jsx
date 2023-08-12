import React from 'react'
import Johnroy from "./Johnroy.mp4"

export const Vid = () => {
  return (
    <>
      <video autoPlay loop muted className='flex justify-center items-center'>
        <source src={Johnroy} type="video/mp4"/>
      </video>
    </>
  )
}
