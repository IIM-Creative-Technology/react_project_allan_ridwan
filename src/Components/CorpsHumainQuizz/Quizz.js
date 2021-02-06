import React, {Component} from 'react';
import Questions from './Questions';
import Reponses from './Reponse';
import '../../Scss/Sass/Components/Quizz/Quizz.scss';

class Corps extends Component {

    // Préparation Questions / Réponse
    state = {
        questions: {
            1: 'Quelle partie du corps est liée à l\'audition ?',
            2: 'Quel est le terme médical de la colonne vertébrale ?',
            3: 'Combien l\'homme a-t-il de doigt(s) ?',
            4: 'Combien la peau contient-elle de couche(s) ? ',
            5: 'Quels organes produisent les ovules ?', 
            6: 'Le coeur est composé de combien de partie(s) ?',
            7: 'Qu\'est-ce que l\'ADN ? ',
            8: 'Laquelle n\'est pas une base azotée ?', 
            9: 'Quel muscle est le plus fort ?',
            10: 'Qu\'est-ce que l\'IMC ? '
             
        },
        reponses: {
            1: {
                1: 'Le nez',
                2: 'L\'oreille',
                3: 'La bouche', 
                4: 'Le nombril'
            },
            2: {
                1: 'Le tube',
                2: 'La calvitie',
                3: 'Le rachis', 
                4: 'Le rachidium vertébral'
            },
            3: {
                1: '10',
                2: '20',
                3: '5', 
                4: 'ça dépend selon l\'âge'
            },
            4: {
                1: '4',
                2: '5',
                3: '2', 
                4: '3'
            },
            5: {
                1: 'Les ovaires',
                2: 'Les glandes intestinales', 
                3: 'Le intestins',
                4: 'Les chromosomes'
            },
            6: {
                1: '5',
                2: '4', 
                3: '2',
                4: '1'
            },
            7: {
                1: 'La salive ',
                2: 'Le support gastrique',
                3: 'Le support de la reproduction', 
                4: 'Le support de l\'information génétique'
            },
            8: {
                1: 'La thymine',
                2: 'La cytosine',
                3: 'L\'adénine', 
                4: 'La guanide',
            },
            9: {
                1: 'Le triceps',
                2: 'Le biceps',
                3: 'Le grand fessier', 
                4: 'Le quadriceps'
            },
            10: {
                1: '"Inovation Magnétique du Corps',
                2: 'Indice de Masse Corporel',
                3: 'Indice Minimal Corporel', 
                4: 'Instabilité Métrique du Colon'
            },
        },
        reponseCorrects: {
            1: '2',
            2: '3',
            3: '2', 
            4: '4', 
            5: '1', 
            6: '2', 
            7: '4', 
            8: '4', 
            9: '3', 
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
                        <h2>Quizz - Le corps humain</h2>
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
                            <h2>Le quizz sur le "Corps humain" est terminé ! </h2>
                            <p className="Message_reponse">Votre score est de : {score} / {Object.keys(questions).length}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Corps;