import React from 'react'
import "../Assets/css/burger.css"
import '../Assets/css/nav.css'
import Logo from "../Assets/Assets/logo.png"

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
            <div className="bg-starwars relative h-[500px] ">
                <img src={Logo} alt="bg" className="img" />
            </div>
            {/* <img src={Bg} alt='logo' /> */}
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