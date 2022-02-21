import React from 'react'
import "../Assets/css/burger.css"
import Logo from "../Assets/Assets/header.png"
import '../Assets/css/nav.css'

const Nav = () => {
    return (
        <>
            
                <nav className="nav sm:hidden">
                    <ul className="">
                        <li>LE CÔTÉ LUMINEUX</li>
                        <li>LE CÔTÉ OBSCUR</li>
                        <li>L'EMPIRE</li>
                        <li>LES DROÏDES</li>
                        <li>LES EWOKS</li>
                        <li>JABA LE HUTT</li>
                    </ul>
                </nav>
                <img src={Logo} alt='logo' className="w-full top-0 left-0 mt-[-50px] img" />
                {/* <div className="sm:h-50 sm:w-50 sm:bg-starwars sm:bg-center sm:bg-no-repeat sm:bg-cover"></div> */}
                {/* <nav className="hidden sm:block">
                    <button className="h-8 w-8 navbar_burger z-10 right-0 absolute m-2">
                        <span className="burger-bar"></span>
                    </button>
                </nav> */}
            
        </>
    )
}

export default Nav