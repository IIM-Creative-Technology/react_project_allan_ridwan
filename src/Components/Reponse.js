import React from 'react';
import '../Scss/Sass/Components/Reponse.scss';

const Reponses = (props) => {
    let reponses = Object.keys(props.reponse).map((laReponse, i) => (
            <li className={
                props.correctReponse === laReponse ?
                'Bonne réponse' : 
                props.clickedReponse === laReponse ? 
                'Mauvaise réponse' : ''
            }
            onClick={() => props.checkReponse(laReponse)}
            key={laReponse}>
                {props.reponse[laReponse]}
            </li>
        ));

        return (
            <>
                <ul disabled={props.clickedReponse ? true : false} className="Reponses">
                    {reponses}
                </ul>
                <div className="Message_reponse">
                {props.correctReponse ? 'Ah oui oui oui ! Bonne réponse !' :
                props.clickedReponse ? 'Aïe mauvais réponse !' : ''}
                    {/* <p className="Bonne_reponse">{props.correctReponse ? 'Ah oui oui oui ! Bonne réponse !' : ""}</p>
                    <p className="Mauvaise_reponse">{props.clickedReponse ? 'Aïe mauvais réponse !' : ''}</p> */}
                </div>
            </>
        );
}

export default Reponses;