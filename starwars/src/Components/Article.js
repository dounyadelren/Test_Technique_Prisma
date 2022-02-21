import React from 'react'
import Ad from "../Assets/Assets/ad.jpg"
import "../Assets/css/article.css"

const Article = () => {
    return (
        <div className="m-5 mx-auto h-[1174px] w-[755px] flex">
            <div className="text-left text-md">
                <h1><strong>Star Wars, The Force Awakens</strong></h1>
                <br />
                <p>Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ».</p>
                <br />
                <p>Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.</p>
                <br />
                <p>Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ».</p>
                <br />
                <p>Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.</p>
                <br />
                <p>Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ».</p>
                <br />
                <p>Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.</p>
            </div>
            <div className="w-full h-[600px] ml-4 mr-4">
                <img className="pub" src={Ad} alt="pub" />
            </div>
        </div>
    )
}

export default Article