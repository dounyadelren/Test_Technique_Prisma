import React from 'react'
import Troopers from "../Assets/Assets/stormtroopers-2x.jpg"
import Fb from "../Assets/Assets/icon_facebook.png"
import Twitter from "../Assets/Assets/icon_twitter.png"
import Insta from "../Assets/Assets/icon_instagram.png"
import '../Assets/css/footer.css'
const Footer = () => {
    return (
        <footer className="h-[522px]">
            <img src={Troopers} className="w-full h-[250px] object-cover" atl='stormtroopers' />
            {/* <img src={Vador} className="h-[272px] mx-auto" alt='darthvader' /> */}
            <div className="text-sm flex flex-col backImg">
                <h2 className="text-center leading-5 mt-[66px]"><strong>TM Lucasfilm</strong> Ltd. All Rights Reserved</h2>
                <div className="h-[43px]"></div>
                <div className="flex justify-around">
                    <ul className="underline text-center">
                        <li>Terms of use</li>
                        <li>Legal notices</li>
                        <li>Privacy policy</li>
                    </ul>
                    <ul className="underline text-center">
                        <li>Your California Privacy Rights</li>
                        <li>Star Wars at Disney Store</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <div className="flex flex-col">
                        <h2 className="text-center">FOLLOW STAR WARS</h2>
                        <div className="flex items-center place-self-center">
                            <img src={Fb} className="pr-3" alt="facebook" />
                            <img src={Twitter} className="px-3" alt="twitter" />
                            <img src={Insta} className="px-3" alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer