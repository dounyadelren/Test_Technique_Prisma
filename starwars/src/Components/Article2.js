import React from 'react'
import Img from "../Assets/Assets/kiloren-2x.jpg"
import C3P0 from "../Assets/Assets/r2d2_c3p0.jpg"
import "../Assets/css/article.css"

const Article2 = () => {
    return (
        <div>
            <img src={Img} className="img w-full" alt="kiloren" />
            <div className="section flex flex-col mx-auto">
                <h2 className="text-lg text-center font-bold">Long ago, in a galaxy far, far away...</h2>
                <div className="mt-5 flex mx-auto h-[290px]">
                    <img src={C3P0} alt="c3po-r2" className="mx-4 img_thumb" />
                    <div className="text-sm text-left">
                        <p><strong><i>La Guerre des étoiles</i></strong> (titre original <strong><i>Star Wars</i></strong>, soit littéralement <i>Guerres Stellaires</i> ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (<strong><i>l'Épisode IV - Un nouvel espoir</i></strong>) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans.
                            Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :</p>
                    </div>
                </div>
                <ul className="h-[249px] p-2 text-sm">
                    <li>- Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée, westerns, péplums, contes de fées et même le Seigneur des Anneaux de J.R.R. Tolkien ; cette œuvre n'apparaît pas comme de la science-fiction au sens strict mais plutôt comme du space fantasy.</li>
                    <li>- Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation de John Dykstra (qui a également participé au premier film de Star Trek), qui avait développé une nouvelle manière d'animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).</li>
                    <li>- Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une ambiance que l'action proprement dite.</li>
                    <li>- La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé classique mais renforçant la cohérence).</li>
                </ul>
            </div>
        </div>
    )
}

export default Article2