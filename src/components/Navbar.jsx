import React, { useState } from 'react'
import { SiBurgerking } from 'react-icons/si'
import { navbar } from '../utils/data'
const NavBar = () => {

    const [showMenu,setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(prev => !prev)   
    }


  return (
    <div className="">
    <div className="flex items-center justify-between h-10 bg-white px-3">
        <span>Logo</span>
        <SiBurgerking size={30} onClick={handleClick} />
    </div>
    {showMenu && <div className="fixed px-3 text-white text-right h-full w-full opacity-0.5">
        <ul className="">
        {navbar.map((nav,index) => {
            return(
                <li key={index}>
                    <a href={nav.href}>{nav.name}</a>
                </li>
            )
        })
        }
        </ul>
    </div>}
    </div>
  )
}

export default NavBar