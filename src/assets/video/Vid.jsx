import React from 'react'
import Johnroy from "./Johnroy.mp4"

export const Vid = () => {
  return (
    <>
      <video autoPlay loop muted className='flex items-center justify-center h-[3rem]'>
        <source src={Johnroy} type="video/mp4" />
      </video>
    </>
  )
}
