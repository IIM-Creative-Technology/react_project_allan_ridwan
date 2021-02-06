import React, {Component} from 'react';
import Questions from './Questions';
import Reponses from './Reponse';
import '../../Scss/Sass/Components/Quizz/Quizz.scss';

class Alcool extends Component {

    // Préparation Questions / Réponse
    state = {
        questions: {
            1: 'Q1 : Quelle est la substance principale de l\'alcool ?',
            2: 'Q2 : A quoi correspond le degré d\'un alcool ?',
            3: 'Q3 : Qu\'est-ce qu\'un verre standard ?',
            4: 'Q4 : Quel alcool est né en dans les pays de l\'Est ? ',
            5: 'Q5 : Quel alcool est né en Ecosse ?', 
            6: 'Q6 : Quel alcool spiritueux est le plus consommé au monde ?',
            7: 'Q7 : Quel est l\'ingrédient principal de la bière ? ',
            8: 'Q8 : Comment appelle-t-on les bars à bières au Royaume-Uni?', 
            9: 'Q9 : Quel alcool est le "moins" fort ?',
            10: 'Q10 : L\'alcool c\'est de l\'eau ? '
             
        },
        reponses: {
            1: {
                1: 'Le houblon',
                2: 'L\'oxygène',
                3: 'L\'éthanol', 
                4: 'Le lubrizol'
            },
            2: {
                1: 'La quantité d\'alcool pour 100ml',
                2: 'La quantité d\'alcool pour 100mg',
                3: 'La quantité d\'alcool pour 100mg', 
                4: 'La quantité d\'alcool pour un verre (dose bar)'
            },
            3: {
                1: 'Un verre contenant 20 grammes d\'alcool pur',
                2: 'Un verre contenant 15 grammes d\'alcool pur',
                3: 'Un verre contenant 10 grammes d\'alcool pur', 
                4: 'Un verre contenant 30 grammes d\'alcool pur'
            },
            4: {
                1: 'La bière',
                2: 'Le vin',
                3: 'La vodka', 
                4: 'Le whisky'
            },
            5: {
                1: 'La vodka',
                2: 'Le calvados', 
                3: 'Le pastis',
                4: 'Le whisky'
            },
            6: {
                1: 'La vodka',
                2: 'Le calvados', 
                3: 'Le gin',
                4: 'Le whisky'
            },
            7: {
                1: 'Le blé',
                2: 'L\'orge',
                3: 'la sève d\'arbre', 
                4: 'Le houblon'
            },
            8: {
                1: 'The beer station',
                2: 'The Pub',
                3: 'The saloon', 
                4: 'Pas de nom'
            },
            9: {
                1: 'Le vin rouge',
                2: 'Le vin blan',
                3: 'Le cidre', 
                4: 'Le champagne'
            },
            10: {
                1: 'Bah oui !',
                2: 'Bah non !!',
                3: 'ça dépend quoi', 
                4: 'L\'eau contient + d\'éthanol'
            },
        },
        reponseCorrects: {
            1: '3',
            2: '1',
            3: '3', 
            4: '3', 
            5: '4', 
            6: '1', 
            7: '4', 
            8: '2', 
            9: '3', 
            10: '1'
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
                        <h2>Quizz - L'alcool</h2>
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
                            <h2>Le quizz sur "l'Alcool" est terminé ! </h2>
                            <p className="Message_reponse">Votre score est de : {score} / {Object.keys(questions).length}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Alcool;