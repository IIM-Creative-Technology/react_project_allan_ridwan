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
                            <Link to="/"> À propos</Link>
                        </li>
                        {/* <li className="bulletpoint">
                            <Link to="/quizz">Quizz</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>  
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>  
                <Route path="/Propos">
                    <Propos />
                </Route>
                <Route path="/ChampionsLeague">
                    <Champion />
                </Route>
                <Route path="/Orang">
                    <Orang />
                </Route>
                <Route path="/Alcool">
                    <Alcool />
                </Route>
                <Route path="/Corps">
                    <Corps />
                </Route>
                <Route path="*" exact component={Page404} />
            </Switch>
        </Router>
    );
}


export default Rooting;