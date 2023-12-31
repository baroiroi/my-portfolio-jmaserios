import React, { useState } from 'react'
import { SiBurgerking } from 'react-icons/si'
import { navbar } from '../utils/data'
import { Vid } from '../assets/video/Vid'
const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(prev => !prev)
    }


    return (
        <div className="">
            <div className="flex items-center justify-between px-3 bg-white h-15">
                <span>
                    <Vid />
                </span>
                <SiBurgerking size={30} onClick={handleClick} />
            </div>
            {showMenu && <div className="fixed w-full h-full px-3 text-right text-white opacity-0.5">
                <ul className="">
                    {navbar.map((nav, index) => {
                        return (
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