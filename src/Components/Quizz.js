import React, {Component} from 'react';
import Questions from './Questions';
import Reponses from './Reponse';
import '../Scss/Sass/Components/Quizz.scss';

class Quizz extends Component {

    // Préparation Questions / Réponse
    state = {
        questions: {
            1: 'Qui est CR7 ?',
            2: 'Quel est le club avec le plus de Champions League ?',
            3: 'Les supporters de football le plus chaud ?'
        },
        reponses: {
            1: {
                1: 'Une agence immobilière',
                2: 'Un monstre',
                3: 'Une entreprise pour les chantiers'
            },
            2: {
                1: 'Real de Madrid',
                2: 'AC Milan',
                3: 'FC Barcelone'
            },
            3: {
                1: 'Dortmund',
                2: 'Liverpool',
                3: 'LOSC'
            }
        },
        correctReponses: {
            1: '2',
            2: '1',
            3: '1'
        },
        correctReponse: 0,
        clickedReponse: 0,
        step: 1,
        score: 0
    }

    // Methode pour voir si la réponse est bonne
    checkReponse = reponse => {
        const { correctReponses, step, score } = this.state;
        if(reponse === correctReponses[step]){
            this.setState({
                score: score + 1,
                correctReponse: correctReponses[step],
                clickedReponse: reponse
            });
        }else{
            this.setState({
                correctReponse: 0,
                clickedReponse: reponse
            });
        }
    }

    // Methode pour changer de question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctReponse: 0,
            clickedReponse: 0
        });
    }

    render(){
        let { questions, reponses, correctReponse, clickedReponse, step, score } = this.state;
        return(
            <div className="Form_quizz">
                {step <= Object.keys(questions).length ? 
                    (<>
                        <Questions
                            question={questions[step]}
                        />
                        <Reponses
                            reponse={reponses[step]}
                            step={step}
                            checkReponse={this.checkReponse}
                            correctReponse={correctReponse}
                            clickedReponse={clickedReponse}
                        />
                        <div className="Button_next">
                            <button className="EtapeSuivante" disabled={clickedReponse && Object.keys(questions).length >= step ? false : true}
                            onClick={() => this.nextStep(step)}>
                                Suivant
                            </button>
                        </div>
                    </>) : (
                        <div className="Page_fin">
                            <h1>Le quizz Champions League est terminé</h1>
                            <p className="Message_reponse">Votre score est de : {score} / {Object.keys(questions).length}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Quizz;