import React from 'react'
import Img from "../Assets/Assets/kiloren-2x.jpg"
import C3P0 from "../Assets/Assets/r2d2_c3p0.jpg"
import "../Assets/css/article.css"

const Article2 = () => {
    return (
        <div>
            <img src={Img} className="img w-full" alt="kiloren" />
            <h2 className="text-lg text-center font-bold">Long ago, in a galaxy far, far away...</h2>
            <div className="flex justify-center mt-5">
                <img src={C3P0} alt="c3po-r2" className="mx-4 img_thumb"/>
                <div className="text-sm text-left">
                    <p><strong><i>La Guerre des étoiles</i></strong> (titre original <strong><i>Star Wars</i></strong>, soit littéralement <i>Guerres Stellaires</i> ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (<strong><i>l'Épisode IV - Un nouvel espoir</i></strong>) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans.
                    Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :</p>
                </div>
            </div>
        </div>
    )
}

export default Article2