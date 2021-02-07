import React from 'react';
import '../../Scss/Sass/Components/Quizz/Reponse.scss';

const Reponses = ({ reponse, reponseCorrect, choixReponse, verifReponse }) => {

    const random = Object.keys(reponse);

    for(let i = random.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = random[i]
        random[i] = random[j]
        random[j] = temp
      };

    let reponses = random.map((laReponse, i) => (
            <li className={
                reponseCorrect === laReponse ?
                'correct' : 
                choixReponse === laReponse ? 
                'incorrect' : ''
            }
            onClick={() => verifReponse(laReponse)}
            key={laReponse}>
                {reponse[laReponse]}
            </li>
        ));

        return (
            <>
                <ul disabled={choixReponse ? true : false} className="Reponses">
                    {reponses}
                </ul>
                <div className="Message_reponse">
                {reponseCorrect ? 'Ah oui oui ! Bonne réponse !' :
                choixReponse ? 'Aïe... Mauvaise réponse !' : ''}
                </div>
            </>
        );
}

export default Reponses;