import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

import { FaDiscord, FaTwitter } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt4} from 'react-icons/hi'
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <header>
          <div className="burger-wrapper">
          {toggleMenu ? (
                    <AiOutlineClose
                        fontSize={28}
                        className="burger "
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <HiMenuAlt4
                        fontSize={28}
                        className="burger"
                        onClick={() => setToggleMenu(true)}
                    />
                )}
          </div>
            <div className="logo_container">
                
                <img src={Logo} alt="" className='logo' />
            </div>
            <ul className="nav-items">

                <li className='nav-item'>Home</li>


                <li className='nav-item'>Society</li>
                <li className='nav-item'>Team</li>
                <li className='nav-item'>FAQ</li>
            </ul>
            <div className="socials">
                <div className="discord"><FaDiscord /></div>
                <div className="twitter"><FaTwitter /></div>
            </div>
        </header>
    )
}

export default Header