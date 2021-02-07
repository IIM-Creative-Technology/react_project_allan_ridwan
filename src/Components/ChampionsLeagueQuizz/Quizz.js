import React, {Component} from 'react';
import Questions from './Questions';
import Reponses from './Reponse';
import '../../Scss/Sass/Components/Quizz/Quizz.scss';
import Champions from "../../assets/C1.jpg";

class Champion extends Component {

    // Préparation Questions / Réponses
    state = {
        questions: {
            1: 'Q1 : Qui est CR7 ?',
            2: 'Q2 : Quel est le club avec le plus de Champions League ?',
            3: 'Q3 : Quels sont les supporters de football les plus chauds ?',
            4: 'Q4 : Quel est le joueur ayant le plus de Ballons d\'Or à son actif ?',
            5: 'Q5 : Quel club a gagné la dernière Champions League (2020) ?', 
            6: 'Q6 : Quel joueur argentin, légende du football mondial est décédée en 2020 ?',
            7: 'Q7 : Quel unique club français a gagné la Champions League ? ',
            8: 'Q8 : Les propriétaires du PSG sont de quelle nationalité ?', 
            9: 'Q9 : Qui est l\'intru ?',
            10: 'Q10 : Qui est le gardien du Real de Madrid en 2021 ? '
             
        },
        reponses: {
            1: {
                1: 'Une agence immobilière',
                2: 'Un monstre',
                3: 'Une entreprise pour les chantiers', 
                4: 'Le président d\'un club de foot'
            },
            2: {
                1: 'Real de Madrid',
                2: 'AC Milan',
                3: 'FC Barcelone', 
                4: 'Chelsea'
            },
            3: {
                1: 'Dortmund',
                2: 'Liverpool',
                3: 'LOSC', 
                4: 'Leicester'
            },
            4: {
                1: 'Cristiano Ronaldo',
                2: 'Messi',
                3: 'Neymar', 
                4: 'Zidane'
            },
            5: {
                1: 'PSG',
                2: 'Real de Madrid', 
                3: 'Bayern Munich',
                4: 'Manchester city '
            },
            6: {
                1: 'JP Papin',
                2: 'Pelé',
                3: 'Maradona', 
                4: 'Zabaleta'
            },
            7: {
                1: 'OL',
                2: 'OM',
                3: 'LOSC', 
                4: 'PSG'
            },
            8: {
                1: 'Française',
                2: 'Anglaise',
                3: 'Qatari', 
                4: 'Américaine'
            },
            9: {
                1: 'Real de Madrid',
                2: 'Manchester United',
                3: 'FC Barcelone', 
                4: 'PSG'
            },
            10: {
                1: 'Neuer',
                2: 'Courtois',
                3: 'Lloris', 
                4: 'Mandanda'
            },
        },
        reponseCorrects: {
            1: '2',
            2: '1',
            3: '1', 
            4: '2', 
            5: '3', 
            6: '3', 
            7: '2', 
            8: '3', 
            9: '4', 
            10: '2'
        },
        reponseCorrect: 0,
        choixReponse: 0,
        step: 1,
        score: 0
    }

    // Methode de vérification du résultat de la réponse.
    verifReponse = reponse => {
        const { reponseCorrects, step, score } = this.state;
        if(reponse === reponseCorrects[step]){
            this.setState({
                score: score + 1,
                reponseCorrect: reponseCorrects[step],
                choixReponse: reponse
            });
        }else{
            this.setState({
                reponseCorrect: 0,
                choixReponse: reponse
            });
        }
    }

    // Methode pour changer de question.
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            reponseCorrect: 0,
            choixReponse: 0
        });
    }
    //Méthode "render" qui va retourner les différentes questions et leurs réponses. 
    render(){
        let { questions, reponses, reponseCorrect, choixReponse, step, score } = this.state;
        return(
            <div className="Form_quizz">
                {step <= Object.keys(questions).length ? 
                    (<>
                        <h2>Quizz - Champions League</h2>
                        <p className="Message_reponse">Score : {score} / {Object.keys(questions).length}</p>
                        <Questions
                            question={questions[step]}
                        />
                        <Reponses
                            reponse={reponses[step]}
                            step={step}
                            verifReponse={this.verifReponse}
                            reponseCorrect={reponseCorrect}
                            choixReponse={choixReponse}
                        />
                        <div className="Button_next">
                            <button className="EtapeSuivante" disabled={choixReponse && Object.keys(questions).length >= step ? false : true}
                            onClick={() => this.nextStep(step)}>
                                Suivant
                            </button>
                        </div>
                    </>) : (
                        <div className="Page_fin">
                            <img src={Champions} alt="C1" className="C1"/>
                            <h2 className="Titre_fin_quizz">Le quizz sur la "Champions League" est terminé !</h2>
                            <p className="Message_reponse">Votre score est de : {score} / {Object.keys(questions).length}</p>
                        </div>
                    ) 
                }
            </div>
        );
    }
}

export default Champion;