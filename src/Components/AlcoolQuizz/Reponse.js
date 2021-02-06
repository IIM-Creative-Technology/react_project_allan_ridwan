import React from 'react';
import '../../Scss/Sass/Components/Quizz/Reponse.scss';

const Reponses = (props) => {
    let reponses = Object.keys(props.reponse).map((laReponse, i) => (
            <li className={
                props.reponseCorrect === laReponse ?
                'correct' : 
                props.choixReponse === laReponse ? 
                'incorrect' : ''
            }
            onClick={() => props.verifReponse(laReponse)}
            key={laReponse}>
                {props.reponse[laReponse]}
            </li>
        ));

        return (
            <>
                <ul disabled={props.choixReponse ? true : false} className="Reponses">
                    {reponses}
                </ul>
                <div className="Message_reponse">
                {props.reponseCorrect ? 'Ah oui oui ! Bonne réponse !' :
                props.choixReponse ? 'Aïe... Mauvaise réponse !' : ''}
                    {/* <p className="Bonne_reponse">{props.reponseCorrect ? 'Ah oui oui oui ! Bonne réponse !' : ""}</p>
                    <p className="Mauvaise_reponse">{props.choixReponse ? 'Aïe mauvais réponse !' : ''}</p> */}
                </div>
            </>
        );
}

export default Reponses;