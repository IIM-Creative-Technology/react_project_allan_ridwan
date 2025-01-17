import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Propos from "./APropos";
import Page404 from './Error404.js';
import Champion from "./ChampionsLeagueQuizz/Quizz";
import Orang from "./OrangOutanQuizz/Quizz";
import Alcool from "./AlcoolQuizz/Quizz";
import Corps from "./CorpsHumainQuizz/Quizz";

function Rooting() {
    return (
        <Router>
            <div className="navbar_header">
                <nav>
                    <ul className="navbar">
                        <li className="bulletpoint">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="bulletpoint">
                            <Link to="/propos"> À propos</Link>
                        </li>
                    </ul>
                </nav>
            </div>  
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>  
                <Route path="/propos">
                    <Propos />
                </Route>
                <Route path="/championsLeague">
                    <Champion />
                </Route>
                <Route path="/orang">
                    <Orang />
                </Route>
                <Route path="/alcool">
                    <Alcool />
                </Route>
                <Route path="/corps">
                    <Corps />
                </Route>
                <Route path="*" exact component={Page404} />
            </Switch>
        </Router>
    );
    
}

export default Rooting;