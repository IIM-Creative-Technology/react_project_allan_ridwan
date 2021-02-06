import React from 'react'
import Champions from "../assets/C1.jpg";
import Ourang from "../assets/Ourang-outan.svg";
import Biere from "../assets/biere-vertus.jpg";
import Corps from "../assets/corps_humain.jpg";
import { Card } from 'semantic-ui-react'

import '../Scss/Sass/Components/Cards.scss';

const CardExampleCard = () => (
    <div className="Cards_style">
        <Card className="Card01">
            <img src={Champions} className="App-C1" alt="header" />
            <Card.Content>
                <p className="Card_title">La Champions League</p>
                <a href="/ChampionsLeague" className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
        <Card className="Card01">
            <img src={Ourang} className="App-C1" alt="header" />
            <Card.Content>
                <p className="Card_title">Les Orang-outans</p>
                <a href="/Orang" className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
        <Card className="Card02">
            <img src={Biere} className="App-C1" alt="header" />
            <Card.Content>
                <p className="Card_title">L'alcool</p>
                <a href="/Alcool" className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
        <Card className="Card02">
            <img src={Corps} className="App-C1" alt="header" />
            <Card.Content>
                <p className="Card_title">Le corps humain</p>
                <a href="/Corps" className="Card_button">Commencer</a>
            </Card.Content>
        </Card>
    </div>
)

export default CardExampleCard;