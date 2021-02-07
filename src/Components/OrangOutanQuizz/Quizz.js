import React, {Component} from 'react';
import Questions from './Questions';
import Reponses from './Reponse';
import '../../Scss/Sass/Components/Quizz/Quizz.scss';
import OrangOutan from "../../assets/Ourang-outan.svg";

class Orang extends Component {

    // Préparation Questions / Réponses
    state = {
        questions: {
            1: 'Q1 : Qu\'est-ce qu\'un Orang-Outan ?',
            2: 'Q2 : L\'Orang-Outan est : ',
            3: 'Q3 : Que signifie "Orang-Outan" ?',
            4: 'Q4 : Quelle(s) sont/est les/l\'origine(s) du mot "Orang-Outan" ?',
            5: 'Q5 : Combien possède-t-il de main(s) ?', 
            6: 'Q6 : Combien possède-t-il de pied(s) ?',
            7: 'Q7 : Que ne mange-t-il pas ? ',
            8: 'Q8 : A combien de mètres du sol les Orangs-Outan conceptionnent leur nid ?', 
            9: 'Q9 : Quelle est la tranche de poids d\'un Orang-Outan ?',
            10: 'Q10 : Quelle est la moyenne d\'âge de ce primate ? '
             
        },
        reponses: {
            1: {
                1: 'Un poisson',
                2: 'Une baleine',
                3: 'Un singe', 
                4: 'Un type d\'ouragan'
            },
            2: {
                1: 'Un primate',
                2: 'Un crustacé',
                3: 'Un humain', 
                4: 'Un arbre'
            },
            3: {
                1: '"Le géant"',
                2: '"L\'homme de la nature"',
                3: '"Singe poilu"', 
                4: '"Personne de la forêt"'
            },
            4: {
                1: 'L\'indonésien et le malaisien',
                2: 'Le portugais',
                3: 'Le japonais', 
                4: 'Le mandarin'
            },
            5: {
                1: '4',
                2: '2', 
                3: '6',
                4: '1'
            },
            6: {
                1: '4',
                2: '6', 
                3: '2',
                4: '1'
            },
            7: {
                1: 'Des insectes',
                2: 'Du poisson',
                3: 'Des écorces', 
                4: 'De la viande'
            },
            8: {
                1: 'Entre 12 et 18 mètres',
                2: 'Entre 20 et 30 mètres',
                3: 'Entre 5 et 10 mètres', 
                4: 'Au minimum à 1 mètre'
            },
            9: {
                1: '50 à 100 kg',
                2: '20 à 50 kg',
                3: 'Pas plus de 60 kg', 
                4: '40 à 80 kg'
            },
            10: {
                1: '20 ans',
                2: '35 ans',
                3: '15 ans', 
                4: '50 ans'
            },
        },
        reponseCorrects: {
            1: '3',
            2: '1',
            3: '4', 
            4: '1', 
            5: '2', 
            6: '3', 
            7: '4', 
            8: '1', 
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
                        <h2>Quizz - Orang-Outans</h2>
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
                            <img SRC={OrangOutan} alt="Image_orang_outan" className="C1"></img>
                            <h2>Le quizz sur les "Orang-Outans" est terminé ! </h2>
                            <p className="Message_reponse">Votre score est de : {score} / {Object.keys(questions).length}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Orang;