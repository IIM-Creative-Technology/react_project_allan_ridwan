import React from 'react'
import Champions from "../assets/C1.jpg";
import Ourang from "../assets/Ourang-outan.svg";
import { Card } from 'semantic-ui-react'
// Package Manager
import '../Scss/Sass/Components/Cards.scss';

const CardExampleCard = () => (
    <h2>Choisissez un thème pour commencer un quizz !</h2>,
    <div className="Cards_style">
        <Card className="Card01">
            <img src={Champions} className="App-C1" alt="header"/>
            <Card.Content>
                <p className="Card_title">Champions League</p>
                <a className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
        <Card className="Card01">
            <img src={Ourang} className="App-C1" alt="header"/>
            <Card.Content>
                <p className="Card_title">Orang-outan</p>
                <a className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
        <Card className="Card02">
            <img src={Champions} className="App-C1" alt="header"/>
            <Card.Content>
                <p className="Card_title">Champions League</p>
                <a className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
        <Card className="Card02">
            <img src={Champions} className="App-C1" alt="header"/>
            <Card.Content>
                <p className="Card_title">Champions League</p>
                <a className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
    </div>
)

export default CardExampleCard